<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
  <header>
   

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/00-Hello-World">00-Hello-World</RouterLink>
        <RouterLink to="/01-Data-Setup">01-Data-Setup</RouterLink>
        <RouterLink to="/02-Binding-v-bind">02-Binding-v-bind</RouterLink>
        <RouterLink to="/03-Conditional-Rendering-v-if">03-Conditional-Rendering-v-if</RouterLink>
        <RouterLink to="/04-List-Rendering-v-for">04-List-Rendering-v-for</RouterLink>
        <RouterLink to="/05-Methods">05-Methods</RouterLink>
        <RouterLink to="/06-Event-Handling-v-on">06-Event-Handling-v-on</RouterLink>
        <RouterLink to="/07-Form-Handling">07-Form-Handling</RouterLink>
        <RouterLink to="/08-Computed-Properties">08-Computed-Properties</RouterLink>
        <RouterLink to="/09-Watchers">09-Watchers</RouterLink>
        <RouterLink to="/10-Components-and-props">10-Components-and-props</RouterLink>
        <RouterLink to="/11-Provide-and-Inject">11-Provide-and-Inject</RouterLink>
        <RouterLink to="/12-Component-Events">12-Component-Events</RouterLink>
        <RouterLink to="/13-Reflective-Two-Way-Data-v-model">13-Reflective-Two-Way-Data-v-model</RouterLink>
        <RouterLink to="/14-Slots-and-Slotprops">14-Slots-and-Slotprops</RouterLink>
        <RouterLink to="/15-Component-Styles">15-Component-Styles</RouterLink>
        <RouterLink to="/16-Dynamic-Components-and-Keep-Alive">16-Dynamic-Components-and-Keep-Alive</RouterLink>
        <RouterLink to="/17-Teleport-Component">17-Teleport-Component</RouterLink>
        <RouterLink to="/18-HTTP-and-Components">18-HTTP-and-Components</RouterLink>
        <RouterLink to="/19-Lifecycle-Hooks">19-Lifecycle-Hooks</RouterLink>
        <RouterLink to="/20-Template-refs">20-Template-refs</RouterLink>
        <RouterLink to="/21-Reusability-via-mixins-and-composables">21-Reusability-via-mixins-and-composables</RouterLink>
        <RouterLink to="/22-Composition-API-Ref-Reactive-Tokens">22-Composition-API-Ref-Reactive-Tokens</RouterLink>
        <RouterLink to="/23-Composition-API-Ref-Reactive-Methods">23-Composition-API-Ref-Reactive-Methods</RouterLink>
        <RouterLink to="/24-Composition-API-Ref-25-Composition-API-Ref-Reactive-Watchers">24-Composition-API-Ref-25-Composition-API-Ref-Reactive-Watchers</RouterLink>
        <RouterLink to="/25-Composition-API-Ref-Reactive-Watchers">25-Composition-API-Ref-Reactive-Watchers</RouterLink>
        <RouterLink to="/26-Composition-API-Ref-Reactive-Template-Refs">26-Composition-API-Ref-Reactive-Template-Refs</RouterLink>
        <RouterLink to="/27-Composition-API-Ref-Reactive-Lifecycle-Hooks">27-Composition-API-Ref-Reactive-Lifecycle-Hooks</RouterLink>
        <RouterLink to="/28-Composition-API-Ref-Reactive-Template-Refs">28-Composition-API-Ref-Reactive-Template-Refs</RouterLink>
        <RouterLink to="/29-Composition-API-Ref-Reactive-props">29-Composition-API-Ref-Reactive-props</RouterLink>
        <RouterLink to="/30-Composition-API-Ref-Reactive-Custom-Events">30-Composition-API-Ref-Reactive-Custom-Events</RouterLink>
        <RouterLink to="/31-Composition-API-Ref-Reactive-Reusability">31-Composition-API-Ref-Reactive-Reusability</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
