<script>
  import parellax1 from "$lib/images/parellax1.svg";
  import parellax2 from "$lib/images/parellax2.svg";
  import ellipse from "$lib/images/Ellipse.svg";

  $: mousePositionX = 1;
  $: mousePositionY = 1;
  function updateImagePosition(event) {
    mousePositionX = (event.clientX / window.innerWidth) * 10;
    mousePositionY = (event.clientY / window.innerHeight) * 10;
  }

  import { onMount } from "svelte";
  let isVisible = false;
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 200);
  });
</script>

<div on:mousemove={updateImagePosition} role="presentation">
  <div class="bgImage hidden lg:block">
    <img
      src={ellipse}
      alt=""
      class="absolute object-contain top-[20%] left-[20%]"
      style="transform: translate({mousePositionX}%, {mousePositionY}%);"
    />
    <img
      src={parellax1}
      alt=""
      class="absolute object-contain top-42 left-[30%]"
      style="transform: translate({mousePositionX}%, {mousePositionY}%);"
    />
    <img
      src={parellax2}
      alt=""
      class="absolute object-contain top-[22%] left-[38%]"
      style="transform: translate(-{mousePositionX}%, -{mousePositionY}%);"
    />
  </div>

  <div
    class="flex flex-col items-center gap-6 text-5xl md:text-7xl lg:text-8xl justify-center hidden-div"
    class:visible-div={isVisible}
  >
    <b class="text-xl text-highlightColor animate__animated animate__fadeInDown"
      >PRAJWAL RAJU P</b
    >
    <b class="text-highlightColor animate__animated animate__fadeInDown"
      >CREATING</b
    >
    <div
      class="accentText bg-accentColor flex flex-col items-center animate__animated animate__fadeInDown"
    >
      <p>SOME</p>
      <p>SHIT</p>
    </div>
    <p class="text-highlightColor animate__animated animate__fadeInDown">
      SINCE
    </p>
    <p class="text-highlightColor animate__animated animate__fadeInDown">
      2019
    </p>
  </div>
</div>

<style>
  .accentText {
    background: linear-gradient(
      215deg,
      #ffafd8 20.81%,
      rgba(208, 157, 251, 0) 137.36%
    );
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hidden-div {
    opacity: 0;
    transition: opacity 0.5s ease; /* Optional: Add a smooth transition effect */
  }

  .visible-div {
    opacity: 1;
  }
</style>
