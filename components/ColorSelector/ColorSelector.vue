<template>
    <div class="form-item flex flex-col ">
        <label :for="props.name" :aria-label="props.name">{{props.name}}</label>     
        <select
            :class="modelValue != 'Select' ? 'selected' : '' "
            @change="updateValue($event.target.value)"
            v-model="modelValue"
            :required="required"
            :id="props.name ? props.name : 'Select'"
        >
            <option>Select</option>
            <option
                v-for="option in options"
                :key="option.id"
                :index="option.id"
                :value="option.id"
                :selected="selected ? true : false"
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
    
    function updateValue(value:any) {
        emit('update:modelValue', value)
    }
</script>
