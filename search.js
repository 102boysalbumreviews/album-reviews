document.addEventListener("DOMContentLoaded", function(){

  const input = document.getElementById("siteSearch");
  const results = document.getElementById("searchResults");

  input.addEventListener("keyup", function(){

    let term = input.value.toLowerCase().trim();
    results.innerHTML = "";

    if(term.length === 0){
      results.style.display = "none";
      return;
    }

    // filter albums by title or artist
    let matches = albums.filter(album =>
      album.title.toLowerCase().includes(term) ||
      album.artist.toLowerCase().includes(term)
    );

    if(matches.length === 0){
      results.style.display = "none";
      return;
    }

    // show up to 5 matches
    matches.slice(0,5).forEach(album => {
      const div = document.createElement("div");
      div.className = "search-result";

      div.innerHTML = `
        <img src="${album.cover}" alt="${album.title} cover">
        <a href="${album.link}">
          <strong>${album.title}</strong><br>
          <span style="color:#aaa;font-size:13px">${album.artist}</span>
        </a>
      `;
      results.appendChild(div);
    });

    results.style.display = "block";

  });

  // hide dropdown if clicked outside
  document.addEventListener("click", function(e){
    if(!input.contains(e.target) && !results.contains(e.target)){
      results.style.display = "none";
    }
  });

});