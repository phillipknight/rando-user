<template>
  <div id="app">
    <ion-app>    
      <router-view></router-view>
    </ion-app>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style>
:root {
  --ion-background-color: #f7f7f7;
  --ion-background-color-rgb: 247,247,247;

  --ion-text-color: #5d5d5d;
  --ion-text-color-rgb: 93,93,93;

  --ion-color-step-50: #efefef;
  --ion-color-step-100: #e8e8e8;
  --ion-color-step-150: #e0e0e0;
  --ion-color-step-200: #d8d8d8;
  --ion-color-step-250: #d1d1d1;
  --ion-color-step-300: #c9c9c9;
  --ion-color-step-350: #c1c1c1;
  --ion-color-step-400: #b9b9b9;
  --ion-color-step-450: #b2b2b2;
  --ion-color-step-500: #aaaaaa;
  --ion-color-step-550: #a2a2a2;
  --ion-color-step-600: #9b9b9b;
  --ion-color-step-650: #939393;
  --ion-color-step-700: #8b8b8b;
  --ion-color-step-750: #848484;
  --ion-color-step-800: #7c7c7c;
  --ion-color-step-850: #747474;
  --ion-color-step-900: #6c6c6c;
  --ion-color-step-950: #656565;

  --ion-color-greenish: #a0c334;
  --ion-color-greenish-rgb: 160,195,52;
  --ion-color-greenish-contrast: #f7f7f7;
  --ion-color-greenish-contrast-rgb: 0,0,0;
  --ion-color-greenish-shade: #8dac2e;
  --ion-color-greenish-tint: #aac948;

  --ion-color-yellowish: #e5d429;
  --ion-color-yellowish-rgb: 229,212,41;
  --ion-color-yellowish-contrast: #5d5d5d;
  --ion-color-yellowish-contrast-rgb: 0,0,0;
  --ion-color-yellowish-shade: #cabb24;
  --ion-color-yellowish-tint: #e8d83e;


}

.ion-color-greenish {
  --ion-color-base: var(--ion-color-greenish);
  --ion-color-base-rgb: var(--ion-color-greenish-rgb);
  --ion-color-contrast: var(--ion-color-greenish-contrast);
  --ion-color-contrast-rgb: var(--ion-color-greenish-contrast-rgb);
  --ion-color-shade: var(--ion-color-greenish-shade);
  --ion-color-tint: var(--ion-color-greenish-tint);
}

.ion-color-yellowish {
  --ion-color-base: var(--ion-color-yellowish);
  --ion-color-base-rgb: var(--ion-color-yellowish-rgb);
  --ion-color-contrast: var(--ion-color-yellowish-contrast);
  --ion-color-contrast-rgb: var(--ion-color-yellowish-contrast-rgb);
  --ion-color-shade: var(--ion-color-yellowish-shade);
  --ion-color-tint: var(--ion-color-yellowish-tint);
}

</style>
