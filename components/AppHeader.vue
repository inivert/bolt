<template>
  <header>
    <NuxtLink 
      to="/" 
      class="logo-link" 
      aria-label="Return to homepage"
    >
      <img 
        src="~/assets/images/logo.svg" 
        alt="Site logo" 
        class="logo"
      />
    </NuxtLink>
  </header>
</template>

<style scoped>
.logo-link {
  display: inline-block;
  cursor: pointer;
}

.logo {
  width: 120px;
  height: auto;
}
</style> 