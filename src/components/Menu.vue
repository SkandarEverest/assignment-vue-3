<script setup>
import { ref, reactive } from 'vue';
const items = ref([
    {
        "id": "1",
        "name": "Chicken Burger",
        "price": 115,
        "description": "Ipsum ipsum clita erat amet dolor justo diam",
        "photolink": "https://picsum.photos/id/10/200"
    },
    {
        "id": "2",
        "name": "Chicken Burger",
        "price": 115,
        "description": "Ipsum ipsum clita erat amet dolor justo diam",
        "photolink": "https://picsum.photos/id/20/200"
    },
    {
        "id": "3",
        "name": "Chicken Burger",
        "price": 115,
        "description": "Ipsum ipsum clita erat amet dolor justo diam",
        "photolink": "https://picsum.photos/id/30/200"
    },
    {
        "id": "4",
        "name": "Chicken Burger",
        "price": 115,
        "description": "Ipsum ipsum clita erat amet dolor justo diam",
        "photolink": "https://picsum.photos/id/40/200"
    },
    {
        "id": "5",
        "name": "Chicken Burger",
        "price": 115,
        "description": "Ipsum ipsum clita erat amet dolor justo diam",
        "photolink": "https://picsum.photos/id/50/200"
    },
    {
        "id": "6",
        "name": "Chicken Burger",
        "price": 115,
        "description": "Ipsum ipsum clita erat amet dolor justo diam",
        "photolink": "https://picsum.photos/id/60/200"
    },
    {
        "id": "7",
        "name": "Chicken Burger",
        "price": 115,
        "description": "Ipsum ipsum clita erat amet dolor justo diam",
        "photolink": "https://picsum.photos/id/70/200"
    },
    {
        "id": "8",
        "name": "Chicken Burger",
        "price": 125,
        "description": "Ipsum ipsum clita erat amet dolor justo diam",
        "photolink": "https://picsum.photos/id/80/200"
    },
])

const editobj = reactive({
  name: 'a',
  price: 100,
  description: 'b'
})

const onEdit= (name, price, description) => {
  editobj.name = name;
  editobj.price = price,
  editobj.description = description
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
                    <input type="text" class="form-control" id="floatingName" placeholder="Chicken Burger">
                    <label for="floatingName" >Menu Name</label>
                </div>
                <div class="form-floating col-md-6">
                    <input type="number" class="form-control" id="floatingPrice" placeholder="100">
                    <label for="floatingPrice" >Menu Price</label>
                </div>
                <div class="form-floating col-12">
                    <textarea class="form-control" placeholder="Leave a description here" id="floatingTextarea2" style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" style="background-color: gray;" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
                    <input type="text" class="form-control" id="floatingName" placeholder="Chicken Burger" :value="editobj.name">
                    <label for="floatingName" >Menu Name</label>
                </div>
                <div class="form-floating col-md-6">
                    <input type="number" class="form-control" id="floatingPrice" placeholder="100" :value="editobj.price">
                    <label for="floatingPrice" >Menu Price</label>
                </div>
                <div class="form-floating col-12">
                    <textarea class="form-control" placeholder="Leave a description here" id="floatingTextarea2" :value="editobj.description" style="height: 100px" ></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" style="background-color: gray;" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
                        v-for="item in items"
                        :key="item.id"
                    >
                        <div class="d-flex align-items-center">
                            <img class="flex-shrink-0 img-fluid rounded" :src=item.photolink alt="" style="width: 80px;">
                            <div class="w-100 d-flex flex-column text-start ps-4">
                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                    <span>{{ item.name }}</span>
                                    <span class="text-primary">{{ `$${item.price}` }}</span>
                                </h5>
                                <small class="fst-italic">{{ item.description }}</small>
                                <button type="button" class="btn btn-primary mt-3" @click="onEdit(item.name, item.price, item.description)" data-bs-toggle="modal" data-bs-target="#editModal" style="width: 32%;">Edit Menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Menu End -->
</template>