import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="container">
        <div className="box big">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw8NDQ8PDQ0NDQ0NDQ0NDQ8NDw0PFREWFhURExUYHTQgGBolJxgVITEhJSksLi4uFx81ODMsNygtLisBCgoKDg0OFRAQFy0dHR0tLS0rKysuLSsrLS0rLS0rLS4uKy0tLSsuListLSstLystLS4tLSstLSstKy0rLSsrK//AABEIAJ8BPgMBEQACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAABAAIDBAUGB//EADoQAAICAQMBBQQHCAIDAQAAAAABAhEDBBIhMQUTQVFhInGBkRQyQlKhscEGFSNictHh8IKSU7LxJP/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAwEQEAAgEDAgMGBQUBAAAAAAAAARECAxIhMUEEUWETInGBkaEyscHh8AUUQtHxI//aAAwDAQACEQMRAD8A/mZ9t8slEAooQhKICKEBKiSAaAaAqKhoqKihoIqAqAaKKgKgKiA2gW0CoCoAoCoAAiAFKKIACIiAAoIIDJFRltAKRUICUQCUQQ0UKRUKQDRaDQEkVDQDRRUENAVAVFQ0BUFVEFQBQBQRUFVAFBARQ0BUAEAwAgAIgAoIIKyYbKCEoSiKEIkgNJFCVCApGkaSAqKFICoBoIqKGhSKihoCoBolAoUqoUChSWqAKCUqCyKCCiLAaAmgMkLALDRFDIAgAqIAAMNkoSiKEBoqFIBopZoIUijSKhKIISqaCFIBRQgVAVAVBFQCUSRB7MXZeSSuVYl/P1+RJy8m40p78Oy7LxrrOb9yUV+JncuzFPsyD6TmvelL8huNkPPl7MnHmNZF/LxL5MbknB4nGuHw/J8M0zQaCBoAIMtBA0AMissihkAQQUEAZbSEBKFIqNJFQgJQlCkAlCEJRFQgKAShASioBoCoJZCN4cLnJQirk+i/UTNLETM1D62LFDBxGpZPtZPL0j5GJ56u8RGJjn5vdtrxacn8CUxncx0t5pZZPxuzPPk7RpY1HL29jxjkywhllshKcVKaV7Y3y68TnnM1xD2+C0MMtSp59Hv/AGi02PBla083lwWtmWvrcfmTSnKY5a/qHh404iaq+seT4+XHDMva4n9nJX4S8ztD5GT5OfE8cnCSpr8fVG45ZlyYpAAMAZBkAaIoZFZZAEAFBhslgJQoqNBCUIEaRpAIEUICVEAhSVCUIGgiAghKPsabF3GNOv4uWvfGL6IzETlPDtcaeNyxkwyX1k4/Bt3/AL5iMeeU3XzHIhGLdKLfi23XC5dL4G44mG8Ymbvq9+fs7bJ/wpRX1uW4rb52/wDBJx3zMxLtlj7OLnp625rRqEb3OTnuUVjjbcU+f/voZy0+HHT8XUzjMbZy/L9649Ht0kFOMotcydY1e5vjc7vj1qvzOePD62WvsjPd0y+1vBqNE1HvIxcb5cbtbfGa8UuVx4G9sVcPm6mnjtme/l6eby6jF32N/wDkxpuPnKPVr9SdOXiieafHNDLQAAEA0RWWANEWGSKCAIoRiG0ihKNIqEIShRRqiiCEoQIoQhASqQFFQoBAghKPRoMPeZccH0cuf6Vy/wAmZynhcMd2UQ+hrsreS14O16UZxmnfUi5p0mlKUm5bPZc1NNqlVqMkuvVevPidq7uWU7Hs0ejzY4fScznHT8KGS5OM31qL8+F+IvG5i+fJvSziPen/AK/T7c3bGKeqbg1gxuE19WSgr6LpfU82M6ehMYc+89+Mxq4XP08n5f6NJRVuO/HUoKLk05XK0lFN1zH5HW5qYfO1cMY1sc9SuYmKnvPWPlHefhHd9bR9mb5xt3LHFylGPCtxS32/Xd18vQ53DH9Q18tLSnLKOJ5ueOsd/XqO0NXilmg4qW2Nxy+w00m3udeK/Kk/A3UxD5X9J8RrTl/7ZRMdvg/O5IPFmfXapbfTrw16MVcPq62FTMw+PrsWzJOK6KVr3PlfmWOjFvOygIAAZBloihkVkgGFZIAxDoijSCNIoUUIhCjSEBRQgRQgQGgIoQFAKKhAQIqPo9hL+K35Y5tfgv1MZ9HbQ/H8nfuHPvZ+GPYn/wAnSGPWnarmX2snY0I6PFq5ZIZLbj3KlUlTdOb8F0XyM6epOec4xi9+XhcIw3TF1Hyl5X23qJYlgnOsWKa24otx23a4UeU+le87RhjEzlXMvizu3Tz36f6fa0+k1UceTNLdHBvW7o6Umqg6d8cfMxlnpzO2eZezGPEYYxljnU4+l27aXC+8cIpewrmktzab4lz4depyiOOOIk8R43HSyj2sb5469efKv5x0839qv2hx49kNNBw3QTn7dc+aZy0dPLGfePG/2/jNLZl70RPw6dPo/Gz7Scn7S38/bnvr3Nq18GeqXj08dPGKjHp6/s69p6pZHBJeGJy5bv2U658m2XdVw7eIzxnCIiOXze2l/FXrjg37+UZxeWOjwGlDRBlgBFDAyyKCKCDJAUYdCkBpIoaKGghSKhSKGioaKKgGgFIoUgIBCkqGgEqIBAgj39izrNFfejOPxa/wZy6OujNZvr6PHu+k4vGeKMof1Rlx/wC34Gbrl3w97KcY6y8yzPbCHVJPh/CSv32jtp+7UvXPiN0RpRzHl8PP1q/m1h0u+Xs3jc4u5PhNqW7dHyfHTobiHy9WsMrfS+m6rJJReT/87aTgpTcZrzlKKpy/LwOUxjfEcvRhlrZT+Ga+31ftX3emxd7izOe/D/ETh7W2KTcX6vn/AFniics8tuWPRv8AqPhZ/t/LLp53dzX6fk/KZIaPWd5k1Upad7JyhtSblkUL2NeHT39D1zuiIjGLfndPSnQjZOVVE9r+H19fV+OzYnGdPjiLrxpq1+DTOsxF8Po6V5dW8CcsnxS+Rzy5lvVm5Y7aleZr7kYQ+S5Jiy8NGlBANEA0RWaBQaAzRFDRBloiqjm20iioo0kApFDQQ0VDRRUVCAlEAgRQhSkEJRAQQgRRvHNwkprrFqS+DJ1Impt+nxKMe61e+Eo72ng57yUXH61+S5RxyjOZiMe33evR19HDLL2mM3lFRlH+Py/no32pnw5pynpYRwL2WoK3t4SS9rnml0O2GOc6XHM+rGl7DQ18Y1Mpive4ndE/Xzj+U7fs/wBlvPNQWWEZZnubyT+pSuVefgjEa2WOnuzjt25ezxejp6dzozcTPWb478xUR+bWo0k9JkaVuU8ixb1bjKd1cPBQ6v5+ifTdGUXDx4ZZ7u9z/OH0O0ZZHp4tSUFJzbm+VsUqkmvOKpV4s44xeUz/ADlPG604+z05nvf0iePvjHxfmJZI5JLu1txwpwxXzCn9b1Urafla8Ed4muHg1cJ5y7/o+dli1KW7lqTVvq64RMsno0vwRl5vXoIKCeWf1YRcn6+hzljrL4+WbnJyfWTcn72zcNSwLKFEARUwMtEABloihogyQBzdCkUaRQlQgJUKKEISiASiAihCIDRRAQCVEBAIHu7N1NfwpP2ZP2W/sy8vcyHantx3CfC80114LMz1x+386uujlhFYakRMdr7ftP2nmO9/U7Om8koYmlFzne5P2afFr4ef6GNHVmYynLt5fZ28fp5ae32MTlExFxPP0nrMfG+H1YdqYtLkyQy3kjHjHNPdvfhKuK6eJc9OcoiY4lrR17wivvF/f9nTX9u6XJpseJYmlU1zLhW7u1z1b5955tLHVxzynKql5vH+B0tXPT1Mc5vGPzfl4Y1PIsePDHHNuk+9yePjd9D2X3co0cprHdP2/wBHV6Zzyp1FblFva7W6lZicnLQ0pww2XdTMfB87tbVJ1gxu4Qdzkvty/shHm61T5pRBWSAAiAAyyKyQBFZIBGGyijQsJUJQoqEISiLYUBFQhUApAJUQEAlRAQEVCRUB9fTahzxbr9uHsSd8yi+jf++BLprZjlHMXT09lxxy3b80sbdJwXFpX0bkqOMxWe+ImZl9TS1ccvDzpZZxjGPPSb+VTc/KHZRxpOMVLLjjy3Jx9lW/uvn50emM44jLi3hjGMprRvKIi5uO0f8AXmzVP6tYklGOzc+X1dxlz1bJnhOM0mlMZczNX6JQg4pSyw46Kpb4q/dTXxtWYqXojS08piN8cjW6rZilkXE885KPg4x6t/il8TMcy4a0bJnm+Xwjo8wZFQAwAgCKGBlkARQQZYVkw2UEKZRoqEoUEJQlRAKAioUBFCgpAiiCIBKIIgICA9ehnW+P3oX8U1/kzLWMnA/ai+vPK80+GvjbRcYuaTPOMI3T2fd7Q7JnotsM6nCcoKSTdXB+P5mscsMovGbcMdSZyqYmP1if0eHWQxdzGWO1OM7m3JvdF+S8KMTw9PXq+dLNJu2235tmYWT2ll3OEfu4183y/wBDWKZz0eQ05gioDJFDACCZFZZANkGQoZBzTMNtFQlCmIGkVCUKZUNgSZUICBWUNlEBARUNgVgKKIIrArArA7aTIozi39XpL3NUyD1yxODfPR8P08yxxPCZ4xljMS9+u1+bPtnmyTySWJQTk9zUa6c+8RUcRFMYaFe9NzP+unyeJRbjLqSXfCLYx6Xc1zx1b6UiUS8eqy7pykul0vclS/IsMTNy5WEW4KLICwosgGyKGwMkA2RWWyCCuRlWrAbKhsobKFMIbKWUwhsorAUy2GwEqKyiAQiKKwGwKxCIoAhsCsJbwRz5ItrvOPBd45UvLhnkyymPL6vZjETDp+8cv35cepI1vT7rOn6tfvHL03y/7D20eX3Z9nPm4z1mRtRc5U2k0pNceRI1LmOCcaiZt7rPY8oItqwWGwosgLIWGwosgy2QDYAyKCDNGWiUKAShCFFCioQhRQgVFDQCkUIRFEVDQFQFQoNCiwVFQRUBUB8uUEpSq3y7ul4ni1dOL6z9nt08uG4v+VfGT/Q5xhXdvd6Nymq4hjXqu8d/OQnGu5OXow3yrgmrV1GTLp7L8/rLOe6n0D3vCqAgMkUUAEUEUMgCACggyBvaZps7Sh2ikKiWgqJaS2lEtBUC0h2ChpQLQ0sZaQrEXaNdyXaHuRtS2vo/oXaWVpxtLb+jehdqWVpfQbS2lpPQu0P0J+Q2ltLQvyLtQ/u9+Q2hXZ78htD+7n5DaH92PyG2EfF1mijjySTqHurp8Tnn4fTy5mHXDVzh59sV9qv+SR589LQ0+sfR1jPVy6HvV5yfo839mc92l2wlZxz/AMsodNPgyZJLuopu+d0nVevB1wnOfw4VHrLnlt7538H2v3e/I9W159zL0D8htNzD0L8htNzL0T8ibTcxLSMm1N7D0rG03sPTMm1d7LwE2rvZeEmw3svCNq72e6JtN47sm03qjm7qihA0ihRUppFtKaRSmkVG0UbRSm0UbRUp0ikUp0ikWynSMULNrrGCLabXWMYks2usYRFlOsYR8hZTtHHHyFpTrHEiWbW+6ivAWu1ieTHHqn/1sVMrTzZO1MEesMj92Nl2z5p8pfA/aPWaLUwku6zQzqNY80cb9l+Fq+V/c8+tU4zF8uulcTE0/ByeaL6T+T/sfJyy1Ynu+hGyTCeZuvaXrT/sMc9aZrlmY03779ndbodPCMdmeeZxSyZpYpPc/GlfC9D6ulNREXb5+pzN0/Q49bp59Ny/qi0d6lx3Yd3bZil0aZLkrGe7EtPD0LuXZDjPTR8C7knCHCelQtna4z0qLaU4T0yCOMtOgjlLAgjnLAhS25PCSi2XhJSxMvno8j2kWEtoUWwoDSZbCmWwpi0aUi2NKRbGlMto2pi1bWQtkNrIVG1mLa22s4sdI6gWW6R1BbHSOoFlOkdQ/MFOsNQ/MJT0QzvzDLtCV9aJaU7RwxfgTcm2HaOghLrFP4GfaSlNPsjF9xfJE9pLUR6ucuy8S+whvXb6sPQ4l9hDfKbWJYMa+yi7pNkOcpRj0ii2bYhxnqEUmHGWpKzTlLUlKcpakFQ5Szi0qHKWYWbYYeYWU5yyksqGHkJa1DDyIllPlnlek2VFYDYsNlsNlsSYsNi0NlsKkLGtxbDuFh3lsO8tpTSmLKaUxZTSyFsptZBuWm45BZTrHINy7XfHkLZterFkFpOL24Zi02vo6dmJlna+jhRmZTY9CgY3Hs5c8mMm5uMHkyxLa7Xhzm4lmYeDMzVpTxZZFtKeacy7ja4SyDcU5SyDctMPITcUw8g3FMvINxTLyCyhvJZTLmLWn//Z" alt="Innovation" />
          <div className="content">
            <h2>Innovation at Core</h2>
            <p>We believe in pushing boundaries to create meaningful change in the world of technology and business.</p>
          </div>
        </div>
        
        <div className="box small left">
          <img src="data:image/jpeg;base64,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" alt="Teamwork" />
          <div className="content">
            <h2>Team Spirit</h2>
            <p>Great things are built with great teams. Collaboration is at the heart of what we do.</p>
          </div>
        </div>

        <div className="box medium right">
          <img src="data:image/jpeg;base64,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" alt="Growth" />
          <div className="content">
            <h2>Continuous Growth</h2>
            <p>We thrive on continuous learning and improvement, ensuring we stay ahead of the curve.</p>
          </div>
        </div>

        <div className="box big right">
          <img src="data:image/jpeg;base64,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" alt="Technology" />
          <div className="content">
            <h2>Cutting-Edge Technology</h2>
            <p>Utilizing the latest advancements, we build solutions that redefine industries.</p>
          </div>
        </div>

        <div className="box small left">
          <img src="data:image/jpeg;base64,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" alt="Ideas" />
          <div className="content">
            <h2>Creative Ideas</h2>
            <p>Creativity fuels our projects, ensuring every solution is unique and impactful.</p>
          </div>
        </div>

        <div className="box medium">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw8NDQ8PDQ0NDQ0NDQ0NDQ8NDw0PFREWFhURExUYHTQgGBolJxgVITEhJSksLi4uFx81ODMsNygtLisBCgoKDg0OFRAQFy0dHR0tLS0rKysuLSsrLS0rLS0rLS4uKy0tLSsuListLSstLystLS4tLSstLSstKy0rLSsrK//AABEIAJ8BPgMBEQACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAABAAIDBAUGB//EADoQAAICAQMBBQQHCAIDAQAAAAABAhEDBBIhMQUTQVFhInGBkRQyQlKhscEGFSNictHh8IKSU7LxJP/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAwEQEAAgEDAgMGBQUBAAAAAAAAARECAxIhMUEEUWETInGBkaEyscHh8AUUQtHxI//aAAwDAQACEQMRAD8A/mZ9t8slEAooQhKICKEBKiSAaAaAqKhoqKihoIqAqAaKKgKgKiA2gW0CoCoAoCoAAiAFKKIACIiAAoIIDJFRltAKRUICUQCUQQ0UKRUKQDRaDQEkVDQDRRUENAVAVFQ0BUFVEFQBQBQRUFVAFBARQ0BUAEAwAgAIgAoIIKyYbKCEoSiKEIkgNJFCVCApGkaSAqKFICoBoIqKGhSKihoCoBolAoUqoUChSWqAKCUqCyKCCiLAaAmgMkLALDRFDIAgAqIAAMNkoSiKEBoqFIBopZoIUijSKhKIISqaCFIBRQgVAVAVBFQCUSRB7MXZeSSuVYl/P1+RJy8m40p78Oy7LxrrOb9yUV+JncuzFPsyD6TmvelL8huNkPPl7MnHmNZF/LxL5MbknB4nGuHw/J8M0zQaCBoAIMtBA0AMissihkAQQUEAZbSEBKFIqNJFQgJQlCkAlCEJRFQgKAShASioBoCoJZCN4cLnJQirk+i/UTNLETM1D62LFDBxGpZPtZPL0j5GJ56u8RGJjn5vdtrxacn8CUxncx0t5pZZPxuzPPk7RpY1HL29jxjkywhllshKcVKaV7Y3y68TnnM1xD2+C0MMtSp59Hv/AGi02PBla083lwWtmWvrcfmTSnKY5a/qHh404iaq+seT4+XHDMva4n9nJX4S8ztD5GT5OfE8cnCSpr8fVG45ZlyYpAAMAZBkAaIoZFZZAEAFBhslgJQoqNBCUIEaRpAIEUICVEAhSVCUIGgiAghKPsabF3GNOv4uWvfGL6IzETlPDtcaeNyxkwyX1k4/Bt3/AL5iMeeU3XzHIhGLdKLfi23XC5dL4G44mG8Ymbvq9+fs7bJ/wpRX1uW4rb52/wDBJx3zMxLtlj7OLnp625rRqEb3OTnuUVjjbcU+f/voZy0+HHT8XUzjMbZy/L9649Ht0kFOMotcydY1e5vjc7vj1qvzOePD62WvsjPd0y+1vBqNE1HvIxcb5cbtbfGa8UuVx4G9sVcPm6mnjtme/l6eby6jF32N/wDkxpuPnKPVr9SdOXiieafHNDLQAAEA0RWWANEWGSKCAIoRiG0ihKNIqEIShRRqiiCEoQIoQhASqQFFQoBAghKPRoMPeZccH0cuf6Vy/wAmZynhcMd2UQ+hrsreS14O16UZxmnfUi5p0mlKUm5bPZc1NNqlVqMkuvVevPidq7uWU7Hs0ejzY4fScznHT8KGS5OM31qL8+F+IvG5i+fJvSziPen/AK/T7c3bGKeqbg1gxuE19WSgr6LpfU82M6ehMYc+89+Mxq4XP08n5f6NJRVuO/HUoKLk05XK0lFN1zH5HW5qYfO1cMY1sc9SuYmKnvPWPlHefhHd9bR9mb5xt3LHFylGPCtxS32/Xd18vQ53DH9Q18tLSnLKOJ5ueOsd/XqO0NXilmg4qW2Nxy+w00m3udeK/Kk/A3UxD5X9J8RrTl/7ZRMdvg/O5IPFmfXapbfTrw16MVcPq62FTMw+PrsWzJOK6KVr3PlfmWOjFvOygIAAZBloihkVkgGFZIAxDoijSCNIoUUIhCjSEBRQgRQgQGgIoQFAKKhAQIqPo9hL+K35Y5tfgv1MZ9HbQ/H8nfuHPvZ+GPYn/wAnSGPWnarmX2snY0I6PFq5ZIZLbj3KlUlTdOb8F0XyM6epOec4xi9+XhcIw3TF1Hyl5X23qJYlgnOsWKa24otx23a4UeU+le87RhjEzlXMvizu3Tz36f6fa0+k1UceTNLdHBvW7o6Umqg6d8cfMxlnpzO2eZezGPEYYxljnU4+l27aXC+8cIpewrmktzab4lz4depyiOOOIk8R43HSyj2sb5469efKv5x0839qv2hx49kNNBw3QTn7dc+aZy0dPLGfePG/2/jNLZl70RPw6dPo/Gz7Scn7S38/bnvr3Nq18GeqXj08dPGKjHp6/s69p6pZHBJeGJy5bv2U658m2XdVw7eIzxnCIiOXze2l/FXrjg37+UZxeWOjwGlDRBlgBFDAyyKCKCDJAUYdCkBpIoaKGghSKhSKGioaKKgGgFIoUgIBCkqGgEqIBAgj39izrNFfejOPxa/wZy6OujNZvr6PHu+k4vGeKMof1Rlx/wC34Gbrl3w97KcY6y8yzPbCHVJPh/CSv32jtp+7UvXPiN0RpRzHl8PP1q/m1h0u+Xs3jc4u5PhNqW7dHyfHTobiHy9WsMrfS+m6rJJReT/87aTgpTcZrzlKKpy/LwOUxjfEcvRhlrZT+Ga+31ftX3emxd7izOe/D/ETh7W2KTcX6vn/AFniics8tuWPRv8AqPhZ/t/LLp53dzX6fk/KZIaPWd5k1Upad7JyhtSblkUL2NeHT39D1zuiIjGLfndPSnQjZOVVE9r+H19fV+OzYnGdPjiLrxpq1+DTOsxF8Po6V5dW8CcsnxS+Rzy5lvVm5Y7aleZr7kYQ+S5Jiy8NGlBANEA0RWaBQaAzRFDRBloiqjm20iioo0kApFDQQ0VDRRUVCAlEAgRQhSkEJRAQQgRRvHNwkprrFqS+DJ1Impt+nxKMe61e+Eo72ng57yUXH61+S5RxyjOZiMe33evR19HDLL2mM3lFRlH+Py/no32pnw5pynpYRwL2WoK3t4SS9rnml0O2GOc6XHM+rGl7DQ18Y1Mpive4ndE/Xzj+U7fs/wBlvPNQWWEZZnubyT+pSuVefgjEa2WOnuzjt25ezxejp6dzozcTPWb478xUR+bWo0k9JkaVuU8ixb1bjKd1cPBQ6v5+ifTdGUXDx4ZZ7u9z/OH0O0ZZHp4tSUFJzbm+VsUqkmvOKpV4s44xeUz/ADlPG604+z05nvf0iePvjHxfmJZI5JLu1txwpwxXzCn9b1Urafla8Ed4muHg1cJ5y7/o+dli1KW7lqTVvq64RMsno0vwRl5vXoIKCeWf1YRcn6+hzljrL4+WbnJyfWTcn72zcNSwLKFEARUwMtEABloihogyQBzdCkUaRQlQgJUKKEISiASiAihCIDRRAQCVEBAIHu7N1NfwpP2ZP2W/sy8vcyHantx3CfC80114LMz1x+386uujlhFYakRMdr7ftP2nmO9/U7Om8koYmlFzne5P2afFr4ef6GNHVmYynLt5fZ28fp5ae32MTlExFxPP0nrMfG+H1YdqYtLkyQy3kjHjHNPdvfhKuK6eJc9OcoiY4lrR17wivvF/f9nTX9u6XJpseJYmlU1zLhW7u1z1b5955tLHVxzynKql5vH+B0tXPT1Mc5vGPzfl4Y1PIsePDHHNuk+9yePjd9D2X3co0cprHdP2/wBHV6Zzyp1FblFva7W6lZicnLQ0pww2XdTMfB87tbVJ1gxu4Qdzkvty/shHm61T5pRBWSAAiAAyyKyQBFZIBGGyijQsJUJQoqEISiLYUBFQhUApAJUQEAlRAQEVCRUB9fTahzxbr9uHsSd8yi+jf++BLprZjlHMXT09lxxy3b80sbdJwXFpX0bkqOMxWe+ImZl9TS1ccvDzpZZxjGPPSb+VTc/KHZRxpOMVLLjjy3Jx9lW/uvn50emM44jLi3hjGMprRvKIi5uO0f8AXmzVP6tYklGOzc+X1dxlz1bJnhOM0mlMZczNX6JQg4pSyw46Kpb4q/dTXxtWYqXojS08piN8cjW6rZilkXE885KPg4x6t/il8TMcy4a0bJnm+Xwjo8wZFQAwAgCKGBlkARQQZYVkw2UEKZRoqEoUEJQlRAKAioUBFCgpAiiCIBKIIgICA9ehnW+P3oX8U1/kzLWMnA/ai+vPK80+GvjbRcYuaTPOMI3T2fd7Q7JnotsM6nCcoKSTdXB+P5mscsMovGbcMdSZyqYmP1if0eHWQxdzGWO1OM7m3JvdF+S8KMTw9PXq+dLNJu2235tmYWT2ll3OEfu4183y/wBDWKZz0eQ05gioDJFDACCZFZZANkGQoZBzTMNtFQlCmIGkVCUKZUNgSZUICBWUNlEBARUNgVgKKIIrArArA7aTIozi39XpL3NUyD1yxODfPR8P08yxxPCZ4xljMS9+u1+bPtnmyTySWJQTk9zUa6c+8RUcRFMYaFe9NzP+unyeJRbjLqSXfCLYx6Xc1zx1b6UiUS8eqy7pykul0vclS/IsMTNy5WEW4KLICwosgGyKGwMkA2RWWyCCuRlWrAbKhsobKFMIbKWUwhsorAUy2GwEqKyiAQiKKwGwKxCIoAhsCsJbwRz5ItrvOPBd45UvLhnkyymPL6vZjETDp+8cv35cepI1vT7rOn6tfvHL03y/7D20eX3Z9nPm4z1mRtRc5U2k0pNceRI1LmOCcaiZt7rPY8oItqwWGwosgLIWGwosgy2QDYAyKCDNGWiUKAShCFFCioQhRQgVFDQCkUIRFEVDQFQFQoNCiwVFQRUBUB8uUEpSq3y7ul4ni1dOL6z9nt08uG4v+VfGT/Q5xhXdvd6Nymq4hjXqu8d/OQnGu5OXow3yrgmrV1GTLp7L8/rLOe6n0D3vCqAgMkUUAEUEUMgCACggyBvaZps7Sh2ikKiWgqJaS2lEtBUC0h2ChpQLQ0sZaQrEXaNdyXaHuRtS2vo/oXaWVpxtLb+jehdqWVpfQbS2lpPQu0P0J+Q2ltLQvyLtQ/u9+Q2hXZ78htD+7n5DaH92PyG2EfF1mijjySTqHurp8Tnn4fTy5mHXDVzh59sV9qv+SR589LQ0+sfR1jPVy6HvV5yfo839mc92l2wlZxz/AMsodNPgyZJLuopu+d0nVevB1wnOfw4VHrLnlt7538H2v3e/I9W159zL0D8htNzD0L8htNzL0T8ibTcxLSMm1N7D0rG03sPTMm1d7LwE2rvZeEmw3svCNq72e6JtN47sm03qjm7qihA0ihRUppFtKaRSmkVG0UbRSm0UbRUp0ikUp0ikWynSMULNrrGCLabXWMYks2usYRFlOsYR8hZTtHHHyFpTrHEiWbW+6ivAWu1ieTHHqn/1sVMrTzZO1MEesMj92Nl2z5p8pfA/aPWaLUwku6zQzqNY80cb9l+Fq+V/c8+tU4zF8uulcTE0/ByeaL6T+T/sfJyy1Ynu+hGyTCeZuvaXrT/sMc9aZrlmY03779ndbodPCMdmeeZxSyZpYpPc/GlfC9D6ulNREXb5+pzN0/Q49bp59Ny/qi0d6lx3Yd3bZil0aZLkrGe7EtPD0LuXZDjPTR8C7knCHCelQtna4z0qLaU4T0yCOMtOgjlLAgjnLAhS25PCSi2XhJSxMvno8j2kWEtoUWwoDSZbCmWwpi0aUi2NKRbGlMto2pi1bWQtkNrIVG1mLa22s4sdI6gWW6R1BbHSOoFlOkdQ/MFOsNQ/MJT0QzvzDLtCV9aJaU7RwxfgTcm2HaOghLrFP4GfaSlNPsjF9xfJE9pLUR6ucuy8S+whvXb6sPQ4l9hDfKbWJYMa+yi7pNkOcpRj0ii2bYhxnqEUmHGWpKzTlLUlKcpakFQ5Szi0qHKWYWbYYeYWU5yyksqGHkJa1DDyIllPlnlek2VFYDYsNlsNlsSYsNi0NlsKkLGtxbDuFh3lsO8tpTSmLKaUxZTSyFsptZBuWm45BZTrHINy7XfHkLZterFkFpOL24Zi02vo6dmJlna+jhRmZTY9CgY3Hs5c8mMm5uMHkyxLa7Xhzm4lmYeDMzVpTxZZFtKeacy7ja4SyDcU5SyDctMPITcUw8g3FMvINxTLyCyhvJZTLmLWn//Z" alt="Community" />
          <div className="content">
            <h2>Community Impact</h2>
            <p>We are not just about business; we care about making a difference in society.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
