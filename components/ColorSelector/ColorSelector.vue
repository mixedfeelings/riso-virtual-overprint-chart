<template>
    <div class="form-item flex flex-col ">
        <label class="label pb-1 text-xs font-semibold" :for="props.name" :aria-label="props.name">{{props.name}}</label>     
        <select
            class="form-select bg-clip-padding bg-no-repeat appearance-none bg-gray-100 border py-1 px-2 text-sm"
            @change="updateValue($event.target.value)"
            v-model="selected"
            :required="required"
        >
            <option>Select</option>
            <option
                v-for="option in options"
                :key="option.id"
                :index="option.id"
                :value="option.id"
                :selected="selected"
            >
                {{ option.name }}
            </option>
        </select>
    </div>
</template>
<script setup lang="ts">
    import { ref, toRefs } from 'vue';
    const props = defineProps<{
        modelValue: string;
        name?: string;
        required?: boolean;
    }>();
    
    const { modelValue, name } = toRefs(props);
    
    const selected = props.modelValue || "Select";

    
    const options = [
    // {
    //     id: 'black',
    //     name: 'Black',
    // },
    {
        id: 'light-gray',
        name: 'Light Gray',
    }, 
    {
        id: 'burgundy',
        name: 'Burgundy',
    },
    {
        id: 'orchid',
        name: 'Orchid',
    }, 
    {
        id: 'riso-federal-blue',
        name: 'RISO-Federal Blue',
    }, 
    {
        id: 'blue',
        name: 'Blue',
    }, 
    {
        id: 'cornflower',
        name: 'Cornflower',
    }, 
    {
        id: 'aqua',
        name: 'Aqua',
    }, 
    {
        id: 'mint',
        name: 'Mint',
    }, 
    {
        id: 'light-teal',
        name: 'Light Teal',
    }, 
    {
        id: 'kelly-green',
        name: 'Kelly Green',
    }, 
    {
        id: 'green',
        name: 'Green',
    }, 
    {
        id: 'moss',
        name: 'Moss',
    }, 
    {
        id: 'brown',
        name: 'Brown',
    }, 
    {
        id: 'copper',
        name: 'Copper',
    }, 
    {
        id: 'flat-gold',
        name: 'Flat Gold',
    }, 
    {
        id: 'metallic-gold',
        name: 'Metallic Gold',
    }, 
    {
        id: 'fluorescent-yellow',
        name: 'Fluorescent Yellow',
    },     
    {
        id: 'yellow',
        name: 'Yellow',
    }, 
    {
        id: 'sunflower',
        name: 'Sunflower',
    }, 
    {
        id: 'orange',
        name: 'Orange',
    }, 
    {
        id: 'fluorescent-orange',
        name: 'Fluorescent Orange',
    }, 
    {
        id: 'coral',
        name: 'Coral',
    },
    {
        id: 'red',
        name: 'Red',
    }, 
    {
        id: 'bright-red',
        name: 'Bright Red',
    }, 
    {
        id: 'scarlet',
        name: 'Scarlet',
    }, 
    {
        id: 'fluorescent-red',
        name: 'Fluorescent Red',
    }, 
    {
        id: 'fluorescent-pink',
        name: 'Fluorescent Pink',
    }, 
    ]
    
    const emit = defineEmits(['update:modelValue'])
    
    function updateValue(value) {
        emit('update:modelValue', value)
    }
</script>