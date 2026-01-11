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

function populateList(){
  const ul = document.getElementById('spruch-list')
  ul.innerHTML = ''
  sprueche.forEach(s=>{
    const li = document.createElement('li')
    li.textContent = s
    ul.appendChild(li)
  })
}

window.addEventListener('DOMContentLoaded', async ()=>{
  await loadSprueche()
  populateList()

  document.getElementById('open-btn').addEventListener('click', ()=>{
    showSpruch(randomSpruch())
  })

  document.getElementById('new-btn').addEventListener('click', ()=>{
    showSpruch(randomSpruch())
  })

  document.getElementById('list-btn').addEventListener('click', ()=>{
    const sec = document.getElementById('alle')
    sec.classList.toggle('hidden')
  })
})
