<script>
  import picture from "$lib/images/picture.png";
</script>

<div class="flex flex-col gap-10">
  <b class="text-xl">Bio</b>
  <div
    class="aboutContainer flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row gap-4"
  >
    <img src={picture} alt="" class="My-profile-picture flex-1 rounded-lg lg:w-96 xl:w-96 2xl:w-96" />
    <div class="aboutTextContainer flex-1 flex flex-col gap-3">
      <p>
        <span class="highlightText">Hey, I’m Prajwal Raju P </span>
        <span>
          I'm a software Engineer who specializes in building exceptional
          experiences.
        </span>
      </p>
      <p>I enjoy creating things and sharing my journey to the world.</p>
      <p>
        <span class="highlightText">I love dark mode</span>
        <span>
          , open source, and side projects. When I'm not working, I like hiking,
          playing with electronics, and playing guitar.
        </span>
      </p>
    </div>
  </div>
</div>
