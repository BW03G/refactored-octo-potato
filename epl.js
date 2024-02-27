// Specify the URL of the text file containing allowed domains
const allowedDomainsURL = 'https://raw.githubusercontent.com/BW03G/refactored-octo-potato/main/domains-x.txt';

// Function to check if a domain is allowed
function isDomainAllowed() {
  // Get the current domain of the user
  const currentDomain = window.location.hostname;

  // Fetch the list of allowed domains
  fetch(allowedDomainsURL)
    .then(response => response.text())
    .then(data => {
      // Split the text file content into an array of allowed domains
      const allowedDomains = data.split('\n');

      // Check if the current domain is in the list of allowed domains
      if (!allowedDomains.includes(currentDomain)) {
        // Redirect if the domain is not allowed
        window.location.href = 'https://sportpluspremium.netlify.app/Redirect';
      }
    })
    .catch(error => console.error('Error fetching allowed domains:', error));
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', isDomainAllowed);
  
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tablexy");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function () {
    const resultContainer = document.querySelector('.standings');

    // Display loading message
    const loadingMessage = document.querySelector('.loading-message');
    loadingMessage.textContent = 'جاري التحميل...';

    // URL of the page you want to scrape
    const apiUrl = 'https://corsproxy.io/?https://devapiscrap.free.nf/APIs/epl/standings.php';

    // Fetch the HTML content from the API
    fetch(apiUrl)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Extract team data from the API response
            const teams = Array.from(new DOMParser().parseFromString(data.Matchs[0], 'text/html').querySelectorAll('.table .wRow')).map(teamRow => {
                return {
                        place: teamRow.querySelector('.item.arrng').textContent.trim() || '∞',
                        imgSrc: teamRow.querySelector('.item.team img').getAttribute('data-cfsrc') || 'https://i.ibb.co/G97gjc2/football-club.png',
                        teamName: teamRow.querySelector('.item.team').textContent.trim() || 'غير معرف',
                        play: teamRow.querySelector('.item.dtls:nth-child(3)').textContent.trim() || '∞',
                        win: teamRow.querySelector('.item.dtls:nth-child(4)').textContent.trim() || '∞',
                        draw: teamRow.querySelector('.item.dtls:nth-child(5)').textContent.trim() || '∞',
                        loss: teamRow.querySelector('.item.dtls:nth-child(6)').textContent.trim() || '∞',
                        countsFor: teamRow.querySelector('.item.dtls:nth-child(7)').textContent.trim() || '∞',
                        countsOn: teamRow.querySelector('.item.dtls:nth-child(8)').textContent.trim() || '∞',
                        pts: teamRow.querySelector('.item.dtls:nth-child(9)').textContent.trim() || '∞',
                };
            });

            // Display the extracted data
            displayData(teams);

            // Remove loading message
            loadingMessage.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            loadingMessage.textContent = 'حدث خطأ أثناء التحميل';
        });

    // Display the extracted data in a table
    function displayData(data) {
        const table = document.createElement('table');
        table.innerHTML = '<thead><tr class="team-z"><th class="data-n">المركز</th><th class="data-n team-name">الفريق</th><th class="data-n">لعب</th><th class="data-n mob-h">فوز</th><th class="data-n mob-h">تعادل</th><th class="data-n mob-h">هزيمة</th><th class="data-n mob-h">له</th><th class="data-n mob-h">عليه</th><th class="data-n">النقاط</th></tr></thead><tbody></tbody></table>';

        const tbody = table.querySelector('tbody');

        if (!tbody) {
            console.error('Error: tbody not found');
            return;
        }

        data.forEach((teamData, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="data-m">${teamData.place}</td>
                <td class="data-m team-name"><img class="team-logo" src="${teamData.imgSrc}">${teamData.teamName}</td>
                <td class="data-m">${teamData.play}</td>
                <td class="data-m mob-h">${teamData.win}</td>
                <td class="data-m mob-h">${teamData.draw}</td>
                <td class="data-m mob-h">${teamData.loss}</td>
                <td class="data-m mob-h">${teamData.countsFor}</td>
                <td class="data-m mob-h">${teamData.countsOn}</td>
                <td class="data-m">${teamData.pts}</td>`;

            tbody.appendChild(row);
        });

        resultContainer.appendChild(table);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const resultContainer = document.querySelector('.scorers');

    // Display loading message
    const loadingMessage = document.querySelector('.loading-message');
    loadingMessage.textContent = 'جاري التحميل...';

    // URL of the page you want to scrape
    const apiUrl = 'https://corsproxy.io/?https://devapiscrap.free.nf/APIs/epl/scorrers.php';

    // Fetch the JSON content from the API
    fetch(apiUrl)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Extract top scorers data from the API response
            const topScorers = Array.from(new DOMParser().parseFromString(data.Matchs[0], 'text/html').querySelectorAll('.table .wRow.page-1')).map(scorerRow => {
                const playerContainer = scorerRow.querySelector('.item.team.player');
                const teamContainer = scorerRow.querySelector('.item.team:not(.player)'); // Exclude the player container

                return {
                    place: scorerRow.querySelector('.item.arrng').textContent.trim() || '∞',
                    playerImgSrc: playerContainer.querySelector('.playerImg img')?.getAttribute('data-cfsrc') || 'https://media.gemini.media/img/yallakora/Players/Players/pna.jpg',
                    playerName: playerContainer.querySelector('p').textContent.trim() || 'غير معرف',
                    teamImgSrc: teamContainer.querySelector('img')?.getAttribute('data-cfsrc') || 'https://i.ibb.co/G97gjc2/football-club.png',
                    teamName: teamContainer.querySelector('p').textContent.trim() || 'غير معرف',
                    goals: scorerRow.querySelector('.item.dtls').textContent.trim() || '∞',
                };
            });

            // Display the extracted data
            displayData(topScorers);

            // Remove loading message
            loadingMessage.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            loadingMessage.textContent = 'حدث خطأ أثناء التحميل';
        });

    // Display the extracted top scorers data in a table
    function displayData(data) {
        const table = document.createElement('table');
        table.innerHTML = '<thead><tr class="team-z"><th class="data-n">المركز</th><th class="data-n team-name">اللاعب</th><th class="data-n team-name mob-h">الفريق</th><th class="data-n">الأهداف</th></tr></thead><tbody></tbody></table>';

        const tbody = table.querySelector('tbody');

        if (!tbody) {
            console.error('Error: tbody not found');
            return;
        }

        data.forEach((scorerData, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="data-m">${scorerData.place}</td>
                <td class="data-m team-name"><img class="team-logo" src="${scorerData.playerImgSrc}">${scorerData.playerName}</td>
                <td class="data-m team-name mob-h"><img class="team-logo" src="${scorerData.teamImgSrc}">${scorerData.teamName}</td>
                <td class="data-m">${scorerData.goals}</td>`;

            tbody.appendChild(row);
        });

        resultContainer.appendChild(table);
    }
});
