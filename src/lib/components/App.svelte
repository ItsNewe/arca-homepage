<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";
	import Overlay from "./Overlay.svelte";
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import { Analytics, PeopleCircle, School, Book } from 'svelte-ionicons'
	
	onMount(() => {
  themeChange(false)
  // 👆 false parameter is required for svelte
})
  </script>
  

	<!-- <div class="background">
	  <Canvas>
		<Scene />
	  </Canvas>
	</div> -->
	<div class="navbar bg-base-100">
		<div class="flex-1">
		  <a class="btn btn-ghost text-xl" href="/">Arca</a>
		</div>
		<div class="flex-none">
		  <ul class="menu menu-horizontal px-1">
			<label class="grid cursor-pointer place-items-center">
				<input
				  type="checkbox"
				  value="cupcake"
				  class="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
				<svg
				  class="stroke-base-100 fill-base-100 col-start-1 row-start-1"
				  xmlns="http://www.w3.org/2000/svg"
				  width="14"
				  height="14"
				  viewBox="0 0 24 24"
				  fill="none"
				  stroke="currentColor"
				  stroke-width="2"
				  stroke-linecap="round"
				  stroke-linejoin="round">
				  <circle cx="12" cy="12" r="5" />
				  <path
					d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
				</svg>
				<svg
				  class="stroke-base-100 fill-base-100 col-start-2 row-start-1"
				  xmlns="http://www.w3.org/2000/svg"
				  width="14"
				  height="14"
				  viewBox="0 0 24 24"
				  fill="none"
				  stroke="currentColor"
				  stroke-width="2"
				  stroke-linecap="round"
				  stroke-linejoin="round">
				  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			  </label>
			<li><a>Link</a></li>
			<li>
			  <details>
				<summary>Parent</summary>
				<ul class="bg-base-100 rounded-t-none p-2">
				  <li><a>Link 1</a></li>
				  <li><a>Link 2</a></li>
				</ul>
			  </details>
			</li>
		  </ul>
		</div>
	  </div>
		  <main class="bg-neutral-900 text-gray-100 min-h-screen">
			<!-- Header Section with a Dark Gradient Background -->
			<header class="hero min-h-screen bg-gradient-to-b from-neutral-800 to-neutral-900 text-gray-200">
				<div class="background">
					<Canvas>
					  <Scene />
					</Canvas>
				  </div>
				<div class="hero-content flex-col  items-center">
					<h1 class="text-5xl font-bold mb-5">Welcome to Arca</h1>
					<p class="text-xl py-6">Where Wild Ambition Meets Peak Success</p>
					<button class="btn btn-gradient text-white mt-8 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">Get Started</button>
			  	</div>
			</header>
		  
			<!-- Services Section -->
			<section class="py-20 px-5 md:px-20">
			  <div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-4">Unlock the Wild Potential of the Markets with Arca</h2>
				<p class="text-lg text-gray-400">We offer a dynamic range of services designed to empower traders. Whether you're just starting or seeking to refine your skills, we're here to guide you.</p>
			  </div>
		  
			  <!-- Services Grid -->
			  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

				<div class="service bg-neutral-800 p-6 rounded-xl shadow-md text-center">
					Book
				  <h3 class="text-2xl font-semibold mb-4">Comprehensive Trading Courses</h3>
				  <p class="text-gray-400">Climb higher with our expert-led courses, designed to help you navigate the peaks of the financial markets.</p>
				</div>
		  

				<div class="service bg-neutral-800 p-6 rounded-xl shadow-md text-center">
					<Analytics ariaLabel="accessibility svg icon" />
				  <h3 class="text-2xl font-semibold mb-4">Real-Time Market Insights</h3>
				  <p class="text-gray-400">Stay agile in an ever-changing landscape with daily insights that guide you on your wild journey to trading success.</p>
				</div>
		  
				<!-- Service 3 -->
				<div class="service bg-neutral-800 p-6 rounded-xl shadow-md text-center">
					<PeopleCircle ariaLabel="people circle svg icon" />
				  <h3 class="text-2xl font-semibold mb-4">Interactive Community & Chat</h3>
				  <p class="text-gray-400">Join a supportive community that helps bridge the gap between knowledge and success. Grow together with like-minded traders.</p>
				</div>
		  
				<!-- Service 4 -->
				<div class="service bg-neutral-800 p-6 rounded-xl shadow-md text-center">
					<School ariaLabel="school svg icon" />
				  <h3 class="text-2xl font-semibold mb-4">Personalized Coaching & Mentorship</h3>
				  <p class="text-gray-400">Receive tailored one-on-one mentorship that helps you scale the heights of financial success and reach your personal summit.</p>
				</div>
			  </div>
			</section>
			
			<footer class="footer  text-neutral-content  from-neutral-800 to-neutral-900 p-10">
				<aside>
				  <img src="/arca-white.png" style="width: 50px; height: 50px;" alt="">
				  <p>
					© 2024 Arca
					<br />
					Scaling Heights, Reaching Goals
				  </p>
				</aside>
				<nav>
				  <h6 class="footer-title">Social</h6>
				  <div class="grid grid-flow-col gap-4">
					<a>
					  <svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current">
						<path
						  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
					  </svg>
					</a>
					<a>
					  <svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current">
						<path
						  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
					  </svg>
					</a>
					<a>
					  <svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current">
						<path
						  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
					  </svg>
					</a>
				  </div>
				</nav>
			  </footer>
		  </main>
	  <Overlay />

  
  <style>
	.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }
  </style>