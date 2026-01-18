let sprueche = []

async function loadSprueche(){
  try{
    const res = await fetch('sprueche2.json')
    sprueche = await res.json()
  }catch(e){
    console.error('Fehler beim Laden der Sprüche',e)
  }
}

function randomSpruch(){
  if(!sprueche || sprueche.length===0) return 'Noch keine Sprüche.'
  return sprueche[Math.floor(Math.random()*sprueche.length)]
}

function showSpruch(text){
  const el = document.getElementById('spruch')
  el.textContent = text
  const k = document.getElementById('keks')
  k.classList.add('open')
  setTimeout(()=>k.classList.remove('open'),600)
}

window.addEventListener('DOMContentLoaded', async ()=>{
  await loadSprueche()

  document.getElementById('open-btn').addEventListener('click', ()=>{
    showSpruch(randomSpruch())
  })

  document.getElementById('new-btn').addEventListener('click', ()=>{
    showSpruch(randomSpruch())
  })
})
