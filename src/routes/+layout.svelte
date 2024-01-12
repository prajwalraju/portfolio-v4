<script>
  import ContactMe from "./ContactMe.svelte";
  import Header from "./Header.svelte";
  import "./styles.css";
</script>

<div class="app flex flex-col p-3 lg:p-10">
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <ContactMe />
  </footer>
</div>
