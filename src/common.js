const enhanceLunr = (lunr, lngs) => {
    if (lngs.length) {
        await import('lunr-languages/lunr.stemmer.support')(lunr)
        lngs.forEach(({ name }) => {
            if (name !== 'en') {
                try {
                    if (name === 'jp' || name === 'ja') {
                        await import(`lunr-languages/tinyseg`)(lunr)
                    }
                    await import(`lunr-languages/lunr.${name}`)(lunr)
                } catch (e) {
                    console.log(e)
                }
            }
        })
    }
}

export default enhanceLunr;