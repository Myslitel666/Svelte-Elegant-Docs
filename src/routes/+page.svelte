<script lang='ts'>
	//Импорт компонентов
	import {
		Button, 
		Switch,
		TextField,
		DataGrid,
		AutoComplete,
		ColorThemeSwitch
	} from 'svelte-elegant';

	//Импорт утилит
	import { valueExtractors } from 'svelte-elegant/utils'

	//Тестовые данные
	let value = '';
	let isChecked = false;
</script>

<div id = 'container'>
	<div id = 'page'>
		<h1>Svelte Elegant Tester</h1>
		<p>Text Field</p>
		<div class="components-container">
			<TextField 
				bind:value = {value /*Передача переменной по ссылке*/}
				variant = 'Outlined'
				label = 'Outlined'
				onfocus={() => {}}
				onblur={() => {}}
				oninput={(e: Event) => {
					let value = valueExtractors.getInputValue(e); //Извлечение значения
				}}
			/>
			<TextField 
				variant = 'Filled'
				label = 'Filled'
			/>
			<TextField 
				variant = 'Standard'
				label = 'Standard'
			/>
		</div>
		<p class='heading'>Data Grid</p>
		<div class="components-container">
			<DataGrid />
		</div>
		<p class = 'heading'>Auto Complete</p>
		<div class="components-container">
			<AutoComplete 
				options = {['Apple', 'Orange', 'Banana', 'Grape', 'Mango']}
			/>
			<AutoComplete 
				variant = 'Filled' 
			/>
			<AutoComplete 
				variant = 'Standard' 
			/>
		</div>
		<p class = 'heading'>Button</p>
		<div class="components-container">
			<Button variant = 'Contained'>
				CONTAINED
			</Button>
			<Button variant = 'Outlined'>
				OUTLINED
			</Button>
		</div>
		<p class='heading'>Switch</p>
		<div>
			<Switch
				bind:isChecked = {isChecked /*Передача переменной по ссылке*/}
				onchange={(e: Event) => {
					const checked = valueExtractors.getChecked(e); //Извлечение значения
				}}
			 />
		</div>
		<p class='heading'>Color Theme Switch</p>
		<div>
			<ColorThemeSwitch />
		</div>
	</div>
</div>

<style>
	.heading {
		margin-top: 0.35rem;
	}

	.components-container {
		display: flex; /* Располагает дочерние элементы в строку */
		gap: 1rem; /* Задает отступ между элементами */
		align-items: center; /* Вертикальное выравнивание по центру */
	}

	#container {
		display: flex;
		justify-content: center; /* Горизонтальное центрирование */
		align-items: center; /* Вертикальное центрирование */
		min-height: 100vh; /* Минимальная высота экрана */
	}
</style>