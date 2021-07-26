kaboom({
    global:true,
    fullscreen: true,
    scale: 1,
    debug: true
})

loadRoot('https://imgur.com/')
loadSprite('link-going-left','')
loadSprite('link-going-right','https://imgur.com/yZIb8O2.png')
loadSprite('link-going-down','https://imgur.com/r377FIM.png')
loadSprite('link-going-up','UkV0we0.png')
loadSprite('left-wall','./')
loadSprite('top-wall','https://imgur.com/r377FIM.png')
loadSprite('bottom-wall','vWJWmvb.png')
loadSprite('right-wall','SmHhgUn.png')
loadSprite('bottom-left-wall','awnTfNC.png')
loadSprite('bottom-right-wall','https://imgur.com/84oyTFy.png')
loadSprite('top-left-wall','https://imgur.com/xlpUxIm.png')
loadSprite('top-right-wall','https://imgur.com/z0OmBd1.png')
loadSprite('top-door','https://imgur.com/U9nre4n.png ')
loadSprite('fire-pot','https://imgur.com/I7xSp7w.png')
loadSprite('left-door','https://imgur.com/okdJNls.png')
loadSprite('lanterns','https://imgur.com/wiSiY09.png')
loadSprite('slicer','https://imgur.com/c6JFi5Z.png ')
loadSprite('skeletor','Ei1VnX8.png')
loadSprite('kaboom','https://imgur.com/o9WizfI.png')
loadSprite('stairs','VghkL08.png')
loadSprite('bg','https://imgur.com/u4DVsx6.png')


scene("game",()=>{
    const map = [
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'aaaaaaaaaa',
    ]

    const levelCfg = {
        width:48,
        height:48,
        'a':[sprite('left-wall'),solid()]
    }

    addLevel(map,levelCfg)
})

start("game")