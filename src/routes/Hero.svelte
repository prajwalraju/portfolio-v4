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
</script>

<div
  class="flex flex-col items-center gap-6 text-7xl lg:text-8xl justify-center"
  on:mousemove={updateImagePosition}
  role="presentation"
>
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
  <b class="text-xl text-highlightColor">PRAJWAL RAJU P</b>
  <b class="text-highlightColor">CREATING</b>
  <div class="accentText bg-accentColor flex flex-col items-center">
    <p>SOME</p>
    <p>SHIT</p>
  </div>
  <p class="text-highlightColor">SINCE</p>
  <p class="text-highlightColor">2019</p>
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
</style>
