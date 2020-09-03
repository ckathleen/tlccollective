<template>
  <header class="the-header">
    <ul class="flex items-center">
      <li class="the-header__li">
        <span>TLC</span>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped>
.the-header {
  display: flex;
  height: 20px;
  border-bottom: 1px solid #000;
  justify-content: space-between;
  transition: background 0.1s ease-in-out;
  transition-delay: 0.5s;
  background: rgb(181, 229, 229);
}
.the-header__li {
  padding: 0 0.35rem;
  height: 20px;
  user-select: none;
  @apply flex items-center justify-center text-base;
}
</style>
