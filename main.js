const songs = {
  adaband: [
    { title: "Manusia Bodoh", src: "Musik/Manusia Bodoh.mp3" },
    { title: "Karena Wanita", src: "Musik/Karena Wanita.mp3" },
    { title: "Haruskah Kumati", src: "Musik/Haruskah Kumati.mp3" },
    { title: "Masih", src: "Musik/Masih.mp3" },
    { title: "Pemain Cinta", src: "Musik/Pemain Cinta.mp3" },
    { title: "Pemujamu", src: "Musik/Pemujamu.mp3" },
    { title: "Setengah Hati", src: "Musik/Setengah Hati.mp3" },
    { title: "Surga Cinta", src: "Musik/Surga Cinta.mp3" },
    { title: "Tak Bisa Lagi", src: "Musik/Tak Bisa Lagi.mp3" },
    { title: "Yang Terbaik Bagimu", src: "Musik/Yang Terbaik Bagimu.mp3" },
  ],
  dewa19: [
    { title: "Kosong", src: "Musik/Kosong.mp3" },
    { title: "Separuh Nafas", src: "Musik/Separuh Nafas.mp3" },
    { title: "Aku Cinta Kau dan Dia", src: "Musik/Aku Cinta Kau dan Dia.mp3" },
    { title: "Cemburu", src: "Musik/Cemburu.mp3" },
    { title: "Kirana", src: "Musik/Kirana.mp3" },
    { title: "Pangeran Cinta", src: "Musik/Pangeran Cinta.mp3" },
    { title: "Pupus", src: "Musik/Pupus.mp3" },
    { title: "Risalah Hati", src: "Musik/Risalah Hati.mp3" },
    { title: "Satu", src: "Musik/Satu.mp3" },
  ],
  Zamrud: [
    { title: "Asal British", src: "zamrud/Asal British.mp3" },
    { title: "Berakit Rakit", src: "zamrud/Berakit Rakit.mp3" },
    { title: "Dokter Suster", src: "zamrud/Dokter Suster.mp3" },
    { title: "Kau dan Ibumu", src: "zamrud/Kau Dan Ibumu.mp3" },
    { title: "Ningrat", src: "zamrud/Ningrat.mp3" },
    { title: "Pelangi", src: "zamrud/Pelangi.mp3" },
    { title: "Selamat Ulang Tahun", src: "zamrud/Selamat Ulang Tahun.mp3" },
    { title: "Surti Tejo", src: "zamrud/Surti Tejo.mp3" },
    { title: "Telat Tiga Bulan", src: "zamrud/Telat 3 Bulan.mp3" },
    { title: "Waktu Ku Mandi", src: "zamrud/Waktuku Mandi.mp3" },
  ],
  Tipex: [
    { title: "Genit", src: "Tipe-x/Genit.mp3" },
    { title: "Kamu Ngga Sendirian", src: "Tipe-x/Kamu Ngga Sendirian.mp3" },
    { title: "Karena Cemburu", src: "Tipe-x/Karena Cemburu.mp3" },
    { title: "Lagi-Lagi Sendiri", src: "Tipe-x/Lagi Lagi Sendiri.mp3" },
    { title: "Mawar Hitam", src: "Tipe-x/Mawar Hitam.mp3" },
    { title: "Pacar Yang Baik", src: "Tipe-x/Pacar Yang Baik.mp3" },
    { title: "Sakit Hati", src: "Tipe-x/Sakit Hati.mp3" },
    { title: "Salam Rindu", src: "Tipe-x/Salam Rindu.mp3" },
    { title: "Selamat Jalan", src: "Tipe-x/Selamat Jalan.mp3" },
    { title: "Tanda-tanda Patah hati", src: "Tipe-x/Tanda Tanda Patah Hati.mp3" },
  ],
  Sheilaon7: [
    { title: "Betapa", src: "SheilaON7/Betapa.mp3" },
    { title: "Bila Kau Tak Di Sampingku", src: "sheila on7/Bila Kau Tak Disampingku.mp3",    },
    { title: "Buat Aku Tersenyum", src: "sheila on7/Buat Aku Tersenyum.mp3" },
    { title: "Dan", src: "sheila on7/Dan.mp3" },
    { title: "Kita", src: "sheila on7/Kita.mp3" },
    { title: "Pemuja Rahasia", src: "sheila on7/Pemuja Rahasia.mp3" },
    { title: "Rani", src: "sheila on7/Rani.mp3" },
    { title: "Seberapa Pantas", src: "sheila on7/Seberapa Pantas.mp3" },
    { title: "Sebuah Kisah Klasik", src: "sheila on7/Sebuah Kisah Klasik.mp3" },
    { title: "Sephia", src: "sheila on7/Sephia.mp3" },
  ],
  sunda: [
    { title: "Ditalipak", src: "sunda/Ditalipak.mp3" },
    { title: "Eteh", src: "sunda/Eteh.mp3" },
    { title: "Linu", src: "sunda/linu.mp3" },
    { title: "Mumun", src: "sunda/Mumun.mp3" },
    { title: "Panyakit Hate", src: "sunda/panyakit hate.mp3" },
    { title: "Runtah", src: "sunda/Runtah.mp3" },
    { title: "Teteh", src: "sunda/Teteh.mp3" },
  ],
  Campuran: [
    { title: "Ilusi Tak Bertepi", src: "Musik/ilusi Tak Bertepi.mp3" },
    { title: "Suara", src: "Musik/Suara.mp3" },
  ],
};

const playlist = [];
const audioPlayer = document.getElementById("audioPlayer");
const playlistDisplay = document.getElementById("playlistDisplay");
let currentArtistSongs = [];

function showSongsByArtist(artist) {
  const songListDiv = document.getElementById("songList");
  songListDiv.innerHTML = "";

  // Cek apakah data lagu tersedia
  if (!songs[artist] || songs[artist].length === 0) {
    songListDiv.innerHTML = `<p>Tidak ada lagu untuk artis: ${artist}</p>`;
    return;
  }

  // Tambahkan judul artis
  const header = document.createElement("h3");
  header.textContent = artist;
  songListDiv.appendChild(header);

  // Tambahkan daftar lagu
  const ul = document.createElement("ul");
  songs[artist].forEach((song) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => addToPlaylist(song.title, song.src);
    ul.appendChild(li);
  });
  songListDiv.appendChild(ul);

  // Tambahkan tombol tutup jika belum ada
  if (!document.getElementById("closeSongListButton")) {
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Tutup Daftar Lagu";
    closeBtn.id = "closeSongListButton";
    closeBtn.className = "close-songlist-btn";
    closeBtn.onclick = hideSongList;
    songListDiv.appendChild(closeBtn);
  } else {
    document.getElementById("closeSongListButton").style.display = "inline-block";
  }

  songListDiv.scrollIntoView({ behavior: "smooth", block: "start" });
}





function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const toggleButton = document.getElementById("modeToggle");
  const isDark = document.body.classList.contains("dark-mode");
  toggleButton.innerHTML = isDark ? "🌙 Mode Gelap" : "🌗 Ganti Mode";
}

function renderSongList(songArray) {
  const songListDiv = document.getElementById("songList");
  if (!Array.isArray(songArray)) return;

  songListDiv.innerHTML = "<h3>Pilih Lagu:</h3><ul>" +
    songArray.map(song =>
      `<li onclick="addToPlaylist('${song.title}', '${song.src}')">${song.title}</li>`
    ).join("") +
    "</ul>";
}

function addToPlaylist(title, src) {
  if (!title || !src) return;

  playlist.push({ title, src });
  savePlaylist();
  updatePlaylistDisplay();

  if (audioPlayer.paused && !audioPlayer.src) {
    playNext();
  }
}

function removeFromPlaylist(index) {
  if (index < 0 || index >= playlist.length) return;
  playlist.splice(index, 1);
  savePlaylist();
  updatePlaylistDisplay();
}

function updatePlaylistDisplay() {
  playlistDisplay.innerHTML = playlist.map((song, index) =>
    `<li>
      ${index + 1}. ${song.title}
      <button class="remove-btn" onclick="removeFromPlaylist(${index})">❌</button>
    </li>`
  ).join("");
}
 function playNext() {
      if (playlist.length > 0) {
        const next = playlist.shift();
        audioPlayer.src = next.src;
        audioPlayer.play();
        updateNowPlaying(`🎵 Sedang diputar: ${next.title}`);
        savePlaylist();
        updatePlaylistDisplay();
      } else {
        audioPlayer.pause();
        updateNowPlaying("🎵 Tidak ada lagu diputar");
      }
    }

    function updateNowPlaying(text) {
      const nowPlaying = document.getElementById("nowPlaying");
      nowPlaying.textContent = text;
    }


function skipSong() {
  audioPlayer.pause();
  playNext();
}

function shufflePlaylist() {
  for (let i = playlist.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
  }
  updatePlaylistDisplay();
  savePlaylist();
}

function savePlaylist() {
  try {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  } catch (err) {
    console.error("Gagal menyimpan playlist:", err);
  }
}

function loadPlaylist() {
  try {
    const saved = JSON.parse(localStorage.getItem("playlist"));
    if (Array.isArray(saved)) {
      playlist.push(...saved);
      updatePlaylistDisplay();
    }
  } catch (err) {
    console.error("Gagal memuat playlist:", err);
  }
}

function globalSearch() {
  const searchBox = document.getElementById("searchBox");
  const keyword = searchBox.value.toLowerCase().trim();
  const songListDiv = document.getElementById("songList");
  const closeBtn = document.getElementById("closeSongListButton");

  if (keyword === "") {
    songListDiv.innerHTML = "";
    closeBtn.style.display = "none";
    return;
  }

  const results = [];

  for (const artist in songs) {
    for (const song of songs[artist]) {
      if (song.title.toLowerCase().includes(keyword)) {
        results.push(song);
      }
    }
  }

  songListDiv.innerHTML = "";

  if (results.length > 0) {
    const header = document.createElement("h3");
    header.textContent = "Hasil Pencarian:";
    songListDiv.appendChild(header);

    const ul = document.createElement("ul");
    results.forEach((song) => {
      const li = document.createElement("li");
      li.innerText = song.title;
      li.onclick = () => addToPlaylist(song.title, song.src);
      ul.appendChild(li);
    });
    songListDiv.appendChild(ul);

    closeBtn.style.display = "inline-block"; // Tampilkan tombol
    songListDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    songListDiv.innerHTML = "<p>Tidak ada lagu ditemukan.</p>";
    closeBtn.style.display = "none"; // Sembunyikan jika tidak ada hasil
  }

  searchBox.value = ""; // Kosongkan pencarian
}
function hideSongList() {
  document.getElementById("songList").innerHTML = "";
  document.getElementById("closeSongListButton").style.display = "none";
}

// Event listeners
audioPlayer.addEventListener("ended", playNext);
window.addEventListener("load", loadPlaylist);

