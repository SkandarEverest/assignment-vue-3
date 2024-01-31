<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="container-xxl py-5 bg-dark hero-header mb-5">
        <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">{{ msg === 'menu'? 'Food Menu' : 'Booking' }}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                    <li class="breadcrumb-item"><a href="/" class="text-primary">Home</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">{{ msg }}</li>
                </ol>
            </nav>
        </div>
    </div>
</template>

