<script setup>
import { ref } from 'vue';
import { useSeatbookingStore } from '@/stores/seatbooking'

const seatbookingstore = useSeatbookingStore()

const text = ref('');
const email = ref('');
const duedate = ref('');
const npeople = ref('');
const srequest = ref('');

const formatDate = (tgl) => {

  // Define arrays for short weekday and month names
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Get individual date components
  const dayOfWeek = weekdays[tgl.getDay()];
  const month = months[tgl.getMonth()];
  const dayOfMonth = tgl.getDate();
  const year = tgl.getFullYear();

  // Create the formatted date string
  const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth} ${year}`;
  return formattedDate
};

const onSubmit = () => {
  if (!text.value || !email.value || !duedate.value || !npeople.value || !srequest.value) {
    // Display a toast error message if either field is empty
    alert('Please input all data')
    return;
  }
  const dueDate = new Date(duedate.value);
  const due = formatDate(dueDate);

  const data = {
    name: text.value,
    email:email.value,
    date: due,
    npeople:npeople.value,
    srequest:srequest.value
  };

  console.log(data);

  // Clear form fields
  text.value = '';
  email.value = '';
  duedate.value = '';
  npeople.value = '';
  srequest.value = '';

    seatbookingstore.addItem(data);
};
</script>

<template>
    <!-- Reservation Start -->
    <div class="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div class="row g-0">
            <div class="col-md-6">
                <div class="video">
                    <button type="button" class="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            <div class="col-md-6 bg-dark d-flex align-items-center">
                <div class="p-5 wow fadeInUp" data-wow-delay="0.2s">
                    <h5 class="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                    <h1 class="text-white mb-4">Book A Table Online</h1>
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" v-model="text" id="name" placeholder="Your Name">
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" v-model="email" id="email" placeholder="Your Email">
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating date" id="date3" >
                                    <input type="date" class="form-control datetimepicker-input" v-model="duedate" id="datetime" placeholder="Date & Time" />
                                    <label for="datetime">Date & Time</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <select class="form-select" v-model="npeople" id="select1">
                                        <option value="1">People 1</option>
                                        <option value="2">People 2</option>
                                        <option value="3">People 3</option>
                                    </select>
                                    <label for="select1">No Of People</label>
                                    </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" v-model="srequest" placeholder="Special Request" id="message" style="height: 100px"></textarea>
                                    <label for="message">Special Request</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit" @click.prevent="onSubmit">Book Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog mb-5">
            <div class="modal-content rounded-0">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- 16:9 aspect ratio -->
                    <div class="ratio ratio-16x9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/keOaQm6RpBg?si=gfQ01J20bB9ewfEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Reservation Start -->
</template>

