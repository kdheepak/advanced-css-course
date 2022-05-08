<script lang="ts">
  import { base } from "$app/paths";
</script>

<main class="main">
  <header class="relative h-[95vh] hero-gradient bg-cover bg-top">
    <img
      class="absolute top-[40px] left-[40px] h-[35px]"
      src="{base}/images/logo-white.png"
      alt="Logo"
    />
    <h1
      class="absolute text-[#ffffff] uppercase top-[40%] left-1/2 translate-x-[-50%] translate-y-[-50%]"
    >
      <span class="move-in-left block font-bold text-[60px] tracking-[35px]">Outdoors</span>
      <span class="move-in-right block font-normal text-[20px] tracking-[17.4px]"
        >is where life happens</span
      >
    </h1>
  </header>
</main>

<style>
  @tailwind components;

  @layer components {
    .hero-gradient {
      /* from #7ed56f/80 to #28b483/80 */
      background-image: linear-gradient(
          to right bottom,
          rgba(126, 213, 111, 0.8),
          rgba(40, 180, 131, 0.8)
        ),
        url("../../static/images/hero.jpg");
      clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
    }

    .move-in-left {
      animation-name: moveInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      backface-visibility: hidden;
    }

    .move-in-right {
      animation-name: moveInRight;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      backface-visibility: hidden;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    80% {
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    80% {
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  main {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #777;
    padding: 30px;
  }
</style>
