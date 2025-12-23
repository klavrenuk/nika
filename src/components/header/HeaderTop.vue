<script setup>
import { navHeader } from '@/constants/constants';
</script>

<template>
	<div class="header-top">
		<div class="row">
			<div class="col-4">
				<div class="header-top__wrapper-logo">
					<a class="header-top__logo">
						<img src="/images/app-header-logo-new.png" alt="Ника" />
					</a>
				</div>
			</div>

			<div class="col-8 header-top__right">
				<nav class="header-top__nav">
					<a v-for="navItem in navHeader" :key="navItem.url" :href="navItem.url"
						class="header-top__nav__link">
						{{ navItem.name }}
					</a>
				</nav>

				<a href="tel:+79380802222" class="header-top__phone">+7 (938) 080-22-22</a>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.header-top {
	padding: 32px 0 0;

	&__right {
		display: flex;
		align-items: center;
		gap: 90px;
		justify-content: flex-end;
	}

	&__phone {
		color: #fff;

		&:hover,
		&:active,
		&:focus {
			color: #7A4FF1;
		}
	}
}

.header-top__nav {
	display: flex;
	align-items: center;
	gap: 20px;

	&__link {
		color: #fff;
		font-size: 16px;

		&:hover,
		&:active,
		&:focus {
			color: #7A4FF1;
		}
	}
}

.header-top__logo {
	position: absolute;
	top: 32px;
	left: 0;
	width: 190px;
	height: 205px;
	display: inline-block;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.header-top__wrapper-logo {
	position: relative;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 120px;
		height: 120px;
		background: rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		z-index: 0;
		pointer-events: none;
	}
}

@media all and (max-width: 1200px) {
	.header-top__phone {
		display: none;
	}

	.header-top__right {
		justify-content: flex-end;
	}
}

@media all and (max-width: 720px) {
	.header-top__right {
		display: none;
	}
}
</style>