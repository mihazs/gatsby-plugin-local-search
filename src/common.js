
export const enhanceLunr = (lunr, lngs) => {
    if (lngs.length) {
        import('lunr-languages/lunr.stemmer.support')(lunr)
        lngs.forEach(({ name }) => {
            if (name !== 'en') {
                try {
                    if (name === 'jp' || name === 'ja') {
                        import(`lunr-languages/tinyseg`)(lunr)
                    }
                    import(`lunr-languages/lunr.${name}`)(lunr)
                } catch (e) {
                    console.log(e)
                }
            }
        })
    }
};