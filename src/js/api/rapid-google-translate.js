export const rapidGoogleTranslate = (text) => `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=ru%7Cen&q=${encodeURIComponent(text)}&mt=1&onlyprivate=0`;

export const rapidGoogleTranslateOptions = () => ({
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.RAPID_MEMORY_TRANSLATE,
		"x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com"
    }
})