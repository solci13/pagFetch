<script lang="ts">
 import {user} from "./Store";


const titlesLanguages={
	EN:{
			name: "Hi, My name is",
			phone: "My phone number is",
			email: "My email address is",
			birthday: "My birthday is",
			password: "My password is",
		},
	PT: {
				name: "Oi, meu nome é",
				phone: "Meu número de telefone é",
				email: "Meu correio eletrônico é",
				birthday: "Meu aniversário é",
				password: "Minha senha é",
				},
	ES: {
				name: "Hola, Mi nombre es",
				phone: "Mi número de teléfono es",
				email: "Mi correo electronico es",
				birthday: "Mi cumpleaños es",
				password: "Mi contraseña es",	
			},
	KO: {
				name: "안녕 내 이름은",
				phone: "내 전화 번호는",
				email: "내 이메일은",
				birthday: "내 생일은",
				password: "내 비밀번호는",	
			},
	HU: {
				name: "Helló az én nevem",
				phone: "A telefonszámom",
				email: "Az email-em",
				birthday: "Az én születésnapom",
				password: "A jelszavam",	
			},		
};

 let info = "";

 let lang = "EN"
	
	$: titles = titlesLanguages[lang];
		

 let titleProperty = "";
 let data = "";
	
 function showInfo(titlePropertyValue, dataValue) {
		titleProperty = titlePropertyValue;
		data = dataValue;
	}

 

	let languageList =[
		{ code: "EN", text: `Ingles` },
		{ code: "ES", text: `Español` },
		{ code:"PT", text: `Portugues` },
		{ code: "KO", text: `Coreano`},
		{ code: "HU", text: `Húngaro`},

	];	
</script>

	<main>
	 <header>
	  <h1>Random User Generator</h1>
        <span class="p"> A free,
	      <a id="openSource" href="https://github.com/RandomAPI/Randomuser.me-Node">open-source</a>
		 API for generating random user data. Like Lorem Ipsum, but for people.
		</span>
		<br>
	    <a href="https://twitter.com/randomapi" class="twitter"> <img src="twitter.png" alt="a" >Follow us @randomapi</a>
		<br>
		<br>

		<!-- <button on:click={changeLanguage}>
			Idioma
		</button> -->
		<div>
			<select bind:value={lang}>
				{#each languageList as language}
				 <option value={language.code}>
					{language.text}
				 </option>
				{/each}
			</select>
		</div>
		<div>
			<div class="div">
				<img src={$user?.picture.large} alt="" class="imgRedonda">
			</div>

			<p class="gris">{titles[titleProperty] ?? ""}</p>
			<p class="black">{data}</p>
		  
			<div>
				<img src="user.png" alt="an"  on:mousemove={() => showInfo( "name",`${$user?.name.title} ${$user?.name.first}${$user?.name.last}`)}>
				<img src="email.png" alt="an"   on:mousemove={() => showInfo( "email",`${$user?.email}`) }>
			 	<img src="calendar.png" alt="an"   on:mousemove={() => showInfo( "birthday" , $user?.dob.date) }>
				<img src="phone.png" alt="an"   on:mousemove={() => showInfo ("phone", $user?.phone)}>
				<img src="lock.png" alt="an"   on:mousemove={() => showInfo ( "password", $user?.login.password)}> 
			</div>	
	  </div>
	 </header>	
	</main>

<style>
	main {
			text-align: center;
		}

	header {
		border: solid 1px;
		width: 100%;
		height: 500px;
		background: #2c2e31;
		color: #fff;
	
	}

	h1{
		margin: 0;
		padding-top: 100px;
		font-size: 48px;
		font-weight: 100;
		text-transform: uppercase;
	}

	.div{
	border: 1px solid;
	background: #fff;
	margin: auto;
	max-width: 770px;
	margin-top: 60px;
	}

	.p{
		color:white;
		font-family: Ubuntu,sans-serif;
		font-size: 18px;
		
	}

	.twitter{
		color: hsla(0,0%,100%,.5);
	}
	
	.imgRedonda {
		width:180px;
		height:180px;
		border-radius:180px;
		border:4px solid rgba(0,0,0,.25);
	}
	
	.gris{
		color: #999;
    font-size: 18px;
    margin: 0;
	}
	.black{
	color: #2c2e31;
    font-size: 38px;
    margin: 5px;

	}
	img{
		margin: 15px;
		width: 35px;
	}

 @media (min-width: 640px) {
		main {
			max-width: none;
		}
 }
</style>