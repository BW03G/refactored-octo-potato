const _0x5d16de = (function () {
    let _0xdc4349 = true
    return function (_0x9076e, _0x3e835e) {
      const _0x31992a = _0xdc4349
        ? function () {
            if (_0x3e835e) {
              const _0x424d90 = _0x3e835e.apply(_0x9076e, arguments)
              return (_0x3e835e = null), _0x424d90
            }
          }
        : function () {}
      return (_0xdc4349 = false), _0x31992a
    }
  })(),
  _0x1ee94b = _0x5d16de(this, function () {
    return _0x1ee94b
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x1ee94b)
      .search('(((.+)+)+)+$')
  })
_0x1ee94b()
const _0x174c7f = (function () {
  let _0x850b98 = true
  return function (_0x13cb59, _0x176760) {
    const _0x43e1c9 = _0x850b98
      ? function () {
          if (_0x176760) {
            const _0x234584 = _0x176760.apply(_0x13cb59, arguments)
            return (_0x176760 = null), _0x234584
          }
        }
      : function () {}
    return (_0x850b98 = false), _0x43e1c9
  }
})()
;(function () {
  _0x174c7f(this, function () {
    const _0x11f86d = new RegExp('function *\\( *\\)'),
      _0xcdd37f = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x25ee3f = _0x4c359b('init')
    !_0x11f86d.test(_0x25ee3f + 'chain') || !_0xcdd37f.test(_0x25ee3f + 'input')
      ? _0x25ee3f('0')
      : _0x4c359b()
  })()
})()
const _0xe0aba6 = (function () {
    let _0x1e620b = true
    return function (_0xc11a1a, _0x4b1935) {
      const _0x16be29 = _0x1e620b
        ? function () {
            if (_0x4b1935) {
              const _0xfee7b2 = _0x4b1935.apply(_0xc11a1a, arguments)
              return (_0x4b1935 = null), _0xfee7b2
            }
          }
        : function () {}
      return (_0x1e620b = false), _0x16be29
    }
  })(),
  _0x4ed8ae = _0xe0aba6(this, function () {
    const _0x15493a = function () {
      const _0x204082 = {
        cBagU: function (_0x16e5dc, _0x4e58a4) {
          return _0x16e5dc(_0x4e58a4)
        },
        CJroy: function (_0x10397e, _0x508e95) {
          return _0x10397e + _0x508e95
        },
        ZygUz: function (_0x4c7952, _0x3fe64c) {
          return _0x4c7952 + _0x3fe64c
        },
        IlrKg: 'return (function() ',
        Mbkuf: '{}.constructor("return this")( )',
      }
      let _0x1272ad
      try {
        _0x1272ad = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x5da615) {
        _0x1272ad = window
      }
      return _0x1272ad
    }
    const _0x303b7a = _0x15493a(),
      _0x22f7f7 = (_0x303b7a.console = _0x303b7a.console || {}),
      _0x29147e = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x15e82e = 0; _0x15e82e < _0x29147e.length; _0x15e82e++) {
      const _0x3edffd = _0xe0aba6.constructor.prototype.bind(_0xe0aba6),
        _0xcc3ac5 = _0x29147e[_0x15e82e],
        _0x4fea33 = _0x22f7f7[_0xcc3ac5] || _0x3edffd
      _0x3edffd['__proto__'] = _0xe0aba6.bind(_0xe0aba6)
      _0x3edffd.toString = _0x4fea33.toString.bind(_0x4fea33)
      _0x22f7f7[_0xcc3ac5] = _0x3edffd
    }
  })
_0x4ed8ae()
const allowedDomainsURL =
  'https://raw.githubusercontent.com/BW03G/refactored-octo-potato/main/domains-x.txt'
function isDomainAllowed() {
  const _0x518cb6 = window.location.hostname
  fetch(allowedDomainsURL)
    .then((_0x1141fd) => _0x1141fd.text())
    .then((_0x522e1e) => {
      const _0x52ef4b = _0x522e1e.split('\n')
      !_0x52ef4b.includes(_0x518cb6) &&
        (window.location.href = 'https://sportpluspremium.netlify.app/Redirect')
    })
    .catch((_0x4714a4) =>
      console.error('Error fetching allowed domains:', _0x4714a4)
    )
}
document.addEventListener('DOMContentLoaded', isDomainAllowed)
function openCity(_0x13a915, _0x52d28d) {
  var _0x187899, _0x5a55e0, _0x3a9724
  _0x5a55e0 = document.getElementsByClassName('tablexy')
  for (_0x187899 = 0; _0x187899 < _0x5a55e0.length; _0x187899++) {
    _0x5a55e0[_0x187899].style.display = 'none'
  }
  _0x3a9724 = document.getElementsByClassName('tablinks')
  for (_0x187899 = 0; _0x187899 < _0x3a9724.length; _0x187899++) {
    _0x3a9724[_0x187899].className = _0x3a9724[_0x187899].className.replace(
      ' active',
      ''
    )
  }
  document.getElementById(_0x52d28d).style.display = 'block'
  _0x13a915.currentTarget.className += ' active'
}
document.addEventListener('DOMContentLoaded', function () {
  const _0x338d3f = document.querySelector('.standings')
  const _0x48e57b = document.querySelector('.loading-message')
  _0x48e57b.textContent = 'جاري التحميل...'
  const _0x5d5a0a =
    'https://devapiscrap.free.nf/APIs/laliga/standings.php'
  fetch(_0x5d5a0a)
    .then((_0x30801d) => _0x30801d.json())
    .then((_0x67f201) => {
      const _0x3d8335 = Array.from(
        new DOMParser()
          .parseFromString(_0x67f201.Matchs[0], 'text/html')
          .querySelectorAll('.table .wRow')
      ).map((_0x30715e) => {
        return {
          place:
            _0x30715e.querySelector('.item.arrng').textContent.trim() ||
            '\u221E',
          imgSrc:
            _0x30715e
              .querySelector('.item.team img')
              .getAttribute('data-cfsrc') ||
            'https://i.ibb.co/G97gjc2/football-club.png',
          teamName:
            _0x30715e.querySelector('.item.team').textContent.trim() ||
            'غير معرف',
          play:
            _0x30715e
              .querySelector('.item.dtls:nth-child(3)')
              .textContent.trim() || '\u221E',
          win:
            _0x30715e
              .querySelector('.item.dtls:nth-child(4)')
              .textContent.trim() || '\u221E',
          draw:
            _0x30715e
              .querySelector('.item.dtls:nth-child(5)')
              .textContent.trim() || '\u221E',
          loss:
            _0x30715e
              .querySelector('.item.dtls:nth-child(6)')
              .textContent.trim() || '\u221E',
          countsFor:
            _0x30715e
              .querySelector('.item.dtls:nth-child(7)')
              .textContent.trim() || '\u221E',
          countsOn:
            _0x30715e
              .querySelector('.item.dtls:nth-child(8)')
              .textContent.trim() || '\u221E',
          pts:
            _0x30715e
              .querySelector('.item.dtls:nth-child(9)')
              .textContent.trim() || '\u221E',
        }
      })
      _0x1cdcc8(_0x3d8335)
      _0x48e57b.style.display = 'none'
    })
    .catch((_0x596b51) => {
      console.error('Error fetching data:', _0x596b51),
        (_0x48e57b.textContent = 'حدث خطأ أثناء التحميل')
    })
  function _0x1cdcc8(_0x371181) {
    const _0x329231 = document.createElement('table')
    _0x329231.innerHTML =
      '<thead><tr class="team-z"><th class="data-n">المركز</th><th class="data-n team-name">الفريق</th><th class="data-n">لعب</th><th class="data-n mob-h">فوز</th><th class="data-n mob-h">تعادل</th><th class="data-n mob-h">هزيمة</th><th class="data-n mob-h">له</th><th class="data-n mob-h">عليه</th><th class="data-n">النقاط</th></tr></thead><tbody></tbody></table>'
    const _0x1a3f2b = _0x329231.querySelector('tbody')
    if (!_0x1a3f2b) {
      console.error('Error: tbody not found')
      return
    }
    _0x371181.forEach((_0x15fdda, _0x3ac09f) => {
      const _0x478164 = document.createElement('tr')
      _0x478164.innerHTML =
        '\n                <td class="data-m">' +
        _0x15fdda.place +
        '</td>\n                <td class="data-m team-name"><img class="team-logo" src="' +
        _0x15fdda.imgSrc +
        '">' +
        _0x15fdda.teamName +
        '</td>\n                <td class="data-m">' +
        _0x15fdda.play +
        '</td>\n                <td class="data-m mob-h">' +
        _0x15fdda.win +
        '</td>\n                <td class="data-m mob-h">' +
        _0x15fdda.draw +
        '</td>\n                <td class="data-m mob-h">' +
        _0x15fdda.loss +
        '</td>\n                <td class="data-m mob-h">' +
        _0x15fdda.countsFor +
        '</td>\n                <td class="data-m mob-h">' +
        _0x15fdda.countsOn +
        '</td>\n                <td class="data-m">' +
        _0x15fdda.pts +
        '</td>'
      _0x1a3f2b.appendChild(_0x478164)
    })
    _0x338d3f.appendChild(_0x329231)
  }
})
document.addEventListener('DOMContentLoaded', function () {
  const _0x8c38bc = document.querySelector('.scorers'),
    _0x2f4caf = document.querySelector('.loading-message')
  _0x2f4caf.textContent = 'جاري التحميل...'
  const _0x24d86d =
    'https://devapiscrap.free.nf/APIs/laliga/scorrers.php'
  fetch(_0x24d86d)
    .then((_0x4cc423) => _0x4cc423.json())
    .then((_0x10eab8) => {
      const _0x20a4fc = Array.from(
        new DOMParser()
          .parseFromString(_0x10eab8.Matchs[0], 'text/html')
          .querySelectorAll('.table .wRow.page-1')
      ).map((_0x53ccb1) => {
        const _0x3a2af3 = _0x53ccb1.querySelector('.item.team.player'),
          _0x15698b = _0x53ccb1.querySelector('.item.team:not(.player)')
        return {
          place:
            _0x53ccb1.querySelector('.item.arrng').textContent.trim() ||
            '\u221E',
          playerImgSrc:
            _0x3a2af3
              .querySelector('.playerImg img')
              ?.getAttribute('data-cfsrc') ||
            'https://media.gemini.media/img/yallakora/Players/Players/pna.jpg',
          playerName:
            _0x3a2af3.querySelector('p').textContent.trim() || 'غير معرف',
          teamImgSrc:
            _0x15698b.querySelector('img')?.getAttribute('data-cfsrc') ||
            'https://i.ibb.co/G97gjc2/football-club.png',
          teamName:
            _0x15698b.querySelector('p').textContent.trim() || 'غير معرف',
          goals:
            _0x53ccb1.querySelector('.item.dtls').textContent.trim() ||
            '\u221E',
        }
      })
      _0x3105db(_0x20a4fc)
      _0x2f4caf.style.display = 'none'
    })
    .catch((_0x281fb9) => {
      console.error('Error fetching data:', _0x281fb9)
      _0x2f4caf.textContent = 'حدث خطأ أثناء التحميل'
    })
  function _0x3105db(_0x524be3) {
    const _0x29bc88 = document.createElement('table')
    _0x29bc88.innerHTML =
      '<thead><tr class="team-z"><th class="data-n">المركز</th><th class="data-n team-name">اللاعب</th><th class="data-n team-name mob-h">الفريق</th><th class="data-n">الأهداف</th></tr></thead><tbody></tbody></table>'
    const _0x34210f = _0x29bc88.querySelector('tbody')
    if (!_0x34210f) {
      console.error('Error: tbody not found')
      return
    }
    _0x524be3.forEach((_0x356d5b, _0xb72e44) => {
      const _0x54cc12 = document.createElement('tr')
      _0x54cc12.innerHTML =
        '\n                <td class="data-m">' +
        _0x356d5b.place +
        '</td>\n                <td class="data-m team-name"><img class="team-logo" src="' +
        _0x356d5b.playerImgSrc +
        '">' +
        _0x356d5b.playerName +
        '</td>\n                <td class="data-m team-name mob-h"><img class="team-logo" src="' +
        _0x356d5b.teamImgSrc +
        '">' +
        _0x356d5b.teamName +
        '</td>\n                <td class="data-m">' +
        _0x356d5b.goals +
        '</td>'
      _0x34210f.appendChild(_0x54cc12)
    })
    _0x8c38bc.appendChild(_0x29bc88)
  }
})
;(function () {
  const _0xb18cd = function () {
    let _0xbbd450
    try {
      _0xbbd450 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x2f38b2) {
      _0xbbd450 = window
    }
    return _0xbbd450
  }
  const _0x521af2 = _0xb18cd()
  _0x521af2.setInterval(_0x4c359b, 4000)
})()
function _0x4c359b(_0x3f9ef9) {
  function _0xb68c18(_0x118d92) {
    if (typeof _0x118d92 === 'string') {
      return function (_0x54618c) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x118d92 / _0x118d92).length !== 1 || _0x118d92 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0xb68c18(++_0x118d92)
  }
  try {
    if (_0x3f9ef9) {
      return _0xb68c18
    } else {
      _0xb68c18(0)
    }
  } catch (_0x4a1977) {}
}
