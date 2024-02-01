import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSeatbookingStore = defineStore('booking', () => {

  const items = ref([])


    // Add a new item
    async function addItem(newItem) {
        
        try {
          // Replace with your actual API endpoint
          const response = await fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
          });
    
          const addedItem = await response.json();
          items.value.push(addedItem);
        } catch (error) {
          console.error('Error adding item:', error);
        }
    }


  return { items, addItem}
})
