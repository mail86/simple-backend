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
    {
      title: "Tanda-tanda Patah hati",
      src: "Tipe-x/Tanda Tanda Patah Hati.mp3",
    },
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

function showSongs(artistKey) {
  currentArtistSongs = songs[artistKey];
  renderSongList(currentArtistSongs);
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const toggleButton = document.getElementById("modeToggle");
  const isDark = document.body.classList.contains("dark-mode");

  toggleButton.innerHTML = isDark ? "🌞 Mode Gelap" : "🌗 Ganti Mode";
}


function renderSongList(songArray) {
  const songListDiv = document.getElementById("songList");
  songListDiv.innerHTML = "<h3>Pilih Lagu:</h3><ul>";
  songArray.forEach((song) => {
    songListDiv.innerHTML += `<li onclick="addToPlaylist('${song.title}', '${song.src}')">${song.title}</li>`;
  });
  songListDiv.innerHTML += "</ul>";
}

function addToPlaylist(title, src) {
  playlist.push({ title, src });
  savePlaylist();
  updatePlaylistDisplay();
  if (audioPlayer.paused && !audioPlayer.src) {
    playNext();
  }
}

function removeFromPlaylist(index) {
  playlist.splice(index, 1);
  savePlaylist();
  updatePlaylistDisplay();
}

function updatePlaylistDisplay() {
  playlistDisplay.innerHTML = "";
  playlist.forEach((song, index) => {
    playlistDisplay.innerHTML += `
      <li>
        ${index + 1}. ${song.title}
        <button class="remove-btn" onclick="removeFromPlaylist(${index})">❌</button>
      </li>`;
  });
}

function playNext() {
  if (playlist.length > 0) {
    const next = playlist.shift();
    audioPlayer.src = next.src;
    audioPlayer.play();
    savePlaylist();
    updatePlaylistDisplay();
  } else {
    audioPlayer.src = "";
  }
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
  localStorage.setItem("playlist", JSON.stringify(playlist));
}

function loadPlaylist() {
  const saved = JSON.parse(localStorage.getItem("playlist"));
  if (saved && Array.isArray(saved)) {
    playlist.push(...saved);
    updatePlaylistDisplay();
  }
}

function globalSearch() {
  const searchBox = document.getElementById("searchBox");
  const keyword = searchBox.value.toLowerCase().trim();
  const songListDiv = document.getElementById("songList");

  if (keyword === "") {
    songListDiv.innerHTML = "";
    return;
  }

  let results = [];

  for (const artist in songs) {
    for (const song of songs[artist]) {
      if (song.title.toLowerCase().startsWith(keyword)) {
        results.push(song);
      }
    }
  }

  if (results.length > 0) {
    songListDiv.innerHTML = "<h3>Hasil Pencarian:</h3><ul>";
    results.forEach((song) => {
      songListDiv.innerHTML += `<li onclick="addToPlaylist('${song.title}', '${song.src}')">${song.title}</li>`;
    });
    songListDiv.innerHTML += "</ul>";
    songListDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    songListDiv.innerHTML = "<p>Tidak ada lagu ditemukan.</p>";
    songListDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // 🔄 Kosongkan input pencarian
  searchBox.value = "";
}
