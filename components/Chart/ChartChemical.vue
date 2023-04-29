<template>
    <div class="chart-chemical grid sm:grid-cols-2 gap-4" >
        <div class="color-box color-3-0">
            <div :class="`color-1 ${color_one}`">
                <ul :class="`patches labels text-${color_one}`">                    
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">0</div>
                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">25</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">50</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">100</div>

                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
            </div>
            <div :class="`color-2 ${color_two}`">
                <ul :class="`patches labels text-${color_two}`">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">0</div>
                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">25</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">50</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">100</div>

                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
            </div>
            <div :class="`color-3 ${color_three}`">
                <div class="patch">
                    <div class="patch-inner bg-transparent"></div> 
                </div>
                <div :class="`labels text-${color_three}`">
                    <div class="patch">
                        <div class="text">0</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="color-box color-3-25">
            <div :class="`color-1 ${color_one}`">
                <ul :class="`patches labels text-${color_one}`">                    
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">0</div>
                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">25</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">50</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">100</div>

                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
            </div>
            <div :class="`color-2 ${color_two}`">
                <ul :class="`patches labels text-${color_two}`">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">0</div>
                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">25</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">50</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">100</div>

                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
            </div>
            <div :class="`color-3 ${color_three}`">
                <div class="patch">
                    <div :class="`patch-inner bg-${color_three}/25`"></div> 
                </div>
                <div :class="`labels text-${color_three}`">
                    <div class="patch">
                        <div class="text">25</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="color-box color-3-50">
            <div :class="`color-1 ${color_one}`">
                <ul :class="`patches labels text-${color_one}`">                    
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">0</div>
                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">25</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">50</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">100</div>

                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
            </div>
            <div :class="`color-2 ${color_two}`">
                <ul :class="`patches labels text-${color_two}`">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">0</div>
                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">25</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">50</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">100</div>

                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
            </div>
            <div :class="`color-3 ${color_three}`">
                <div class="patch">
                    <div :class="`patch-inner bg-${color_three}/50`"></div> 
                </div>
                <div :class="`labels text-${color_three}`">
                    <div class="patch">
                        <div class="text">50</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="color-box color-3-100">
            <div :class="`color-1 ${color_one}`">
                <ul :class="`patches labels text-${color_one}`">                    
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">0</div>
                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">25</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">50</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">100</div>

                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_one}/25 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_one}/50 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_one}/100 `"></div> 
                    </li>
                </ul>
            </div>
            <div :class="`color-2 ${color_two}`">
                <ul :class="`patches labels text-${color_two}`">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">0</div>
                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">25</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">50</div>

                    </li>
                    <li class="patch">
                        <div class="patch-inner"></div> 
                        <div class="text">100</div>

                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
                <ul class="patches">
                    <li class="patch">
                        <div class="patch-inner"></div> 
                    </li>
                    <li class="patch">
                        <div :class="`patch-inner bg-${color_two}/25 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_two}/50 `"></div> 
                    </li>
                    <li class="patch  ">
                        <div :class="`patch-inner bg-${color_two}/100 `"></div> 
                    </li>
                </ul>
            </div>
            <div :class="`color-3 ${color_three}`">
                <div class="patch">
                    <div :class="`patch-inner bg-${color_three}`"></div> 
                </div>
                <div :class="`labels text-${color_three}`">
                    <div class="patch">
                        <div class="text">100</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
  import { toRefs } from 'vue';
  const props = defineProps<{
      color_one: string;
      color_two: string;
      color_three: string;
  }>();
  
  const { color_one, color_two, color_three} = toRefs(props);


  
</script>

<style lang="scss" scoped>
.color-box {
    @apply relative w-full;
    .labels {
        .patch {
            @apply relative font-bold text-center overflow-hidden;
            .text {
                @apply absolute top-0 w-full h-full flex items-center justify-center;
            }
            .patch-inner {
                background-image: none;
            }
        }
    }
    .color-1 {
        @apply relative flex flex-row w-full h-full justify-end my-chemical;
        .patches {
            @apply flex flex-col w-chemical;
            .patch {
                .patch-inner {
                    @apply mix-blend-multiply ;
                    padding-top: 100%;
                    
                }
            }
        }
        .labels {
                @apply w-chemical;
        }
    }

    .color-2 {
        @apply absolute top-0 flex flex-col w-full h-full ml-chemical;
        .patches {
            @apply flex flex-row;
            .patch {
                @apply w-chemical;
                .patch-inner {
                    @apply mix-blend-multiply;

                    padding-top: 100%;
                }
            }
        }
    }
    .color-3 {
        @apply absolute top-0 h-full w-full;
        .patch {
            @apply mt-chemical ml-chemical;
            width: 80%;            
            .patch-inner {
                @apply mix-blend-multiply h-full w-full;
                padding-top:100%;
            }
        }
        .labels {
            @apply h-chemical;
            .patch {
                @apply h-full ml-chemical mt-0;
                width: 80%;
            }
        }
    }
}

</style>