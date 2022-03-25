<script>
  let languageList =[
		{ id: 1, text: `Ingles` },
		{ id: 2, text: `Español` },
		{ id: 3, text: `Portugues` },

	];

    function changeLanguage() {
		/*if (lang === "EN") {
			lang = "ES";
		} else {
			lang = "EN";
		}*/
		lang = lang === "EN"
		? "ES"
		: lang === "ES"
			? "PT"
			: "EN";
	}
</script>

<select bind:value={languageList} >
    {#each languageList as language}
    <option value={language}>
        {language.text}
    </option>
    {/each}
</select>

