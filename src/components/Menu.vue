<script setup>
import { ref, reactive } from 'vue';
import { useFoodmenuStore } from '@/stores/foodmenu'

const foodmenustore = useFoodmenuStore()
foodmenustore.fetchItems();

const editobj = reactive({
    id: '',
    name: '',
    price: '',
    description: '',
    photolink: ''
})

const createobj = reactive({
  name: '',
  price: '',
  description: ''
})

const onClickEdit= (id, name, price, description, photolink) => {
    editobj.id = id;
  editobj.name = name;
  editobj.price = price,
  editobj.description = description
  editobj.photolink = photolink
};

const onClickDelete= (id) => {

    foodmenustore.deleteItem(id);

};

const onHandleCreate= () => {
    const rndInt = Math.floor(Math.random() * 1000) + 1
    const data = {
        name: createobj.name,
        price: createobj.price,
        description: createobj.description,
        photolink: `https://picsum.photos/id/${rndInt}/200`
    }
    
    foodmenustore.addItem(data);
    
    createobj.name = '',
    createobj.price = '',
    createobj.description = ''

};

const onHandleEdit= () => {

    const data = {
        id: editobj.id,
        name: editobj.name,
        price: editobj.price,
        description: editobj.description,
        photolink: editobj.photolink
    }
    
    foodmenustore.updateItem(data);

};


</script>

<template>
    <!-- Add Menu Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Menu</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form class="row g-3">
                <div class="form-floating col-md-6">
                    <input type="text" class="form-control" id="floatingName" placeholder="Chicken Burger" v-model="createobj.name">
                    <label for="floatingName" >Menu Name</label>
                </div>
                <div class="form-floating col-md-6">
                    <input type="number" class="form-control" id="floatingPrice" placeholder="100" v-model="createobj.price">
                    <label for="floatingPrice" >Menu Price</label>
                </div>
                <div class="form-floating col-12">
                    <textarea class="form-control" placeholder="Leave a description here" id="floatingTextarea2" v-model="createobj.description" style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" style="background-color: gray;" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="onHandleCreate()" data-bs-dismiss="modal">Save changes</button>
        </div>
        </div>
    </div>
    </div>
    <!-- Edit Menu Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="editModalLabel">Edit Menu</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form class="row g-3">
                <div class="form-floating col-md-6">
                    <input type="text" class="form-control" id="floatingName" placeholder="Chicken Burger" v-model="editobj.name">
                    <label for="floatingName" >Menu Name</label>
                </div>
                <div class="form-floating col-md-6">
                    <input type="number" class="form-control" id="floatingPrice" placeholder="100" v-model="editobj.price">
                    <label for="floatingPrice" >Menu Price</label>
                </div>
                <div class="form-floating col-12">
                    <textarea class="form-control" placeholder="Leave a description here" id="floatingTextarea2" v-model="editobj.description" style="height: 100px" ></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" style="background-color: gray;" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="onHandleEdit()" data-bs-dismiss="modal">Save changes</button>
        </div>
        </div>
    </div>
    </div>

    <!-- Menu Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 class="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                <h1 class="mb-5">Most Popular Items</h1>
                <button type="button" class="btn btn-primary py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Menu</button>
            </div>
            <hr>
            <div class="tab-class text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
                <div class="row g-4">
                    <div 
                        class="col-lg-6"
                        v-for="item in foodmenustore.items"
                        :key="item.id"
                    >
                        <div class="d-flex align-items-center">
                            <img class="flex-shrink-0 img-fluid rounded" :src="item.photolink" alt="" style="width: 80px;">
                            <div class="w-100 d-flex flex-column text-start ps-4">
                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                    <span>{{ item.name }}</span>
                                    <span class="text-primary">{{ `$${item.price}` }}</span>
                                </h5>
                                <small class="fst-italic">{{ item.description }}</small>
                                <div class="mt-3" >
                                <button type="button" class="btn btn-primary me-3" @click="onClickEdit(item.id, item.name, item.price, item.description, item.photolink)" data-bs-toggle="modal" data-bs-target="#editModal" style="width: 32%;">Edit Menu</button>
                                <button type="button" class="btn btn-outline-primary" @click="onClickDelete(item.id)" style="width: 32%;">Delete</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Menu End -->
</template>@/stores/foodmenu