import { Command } from 'discord-akairo'
import type { Message } from 'discord.js'
import Config from '../config'

class keanuCommand extends Command {
  public constructor() {
    super('keanu', {
      aliases: ['keanu'],
    })
  }

  public exec(message: Message) {
    let Keanus = [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg/1200px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg/220px-Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg',
      'https://media.newyorker.com/photos/5cf5728d47f7cc877a506d9b/master/pass/Fry-KeanuReeves-2.jpg',
      'https://www.cheatsheet.com/wp-content/uploads/2020/09/keanu-reeves-speed-1200x800.jpg',
      'https://i.insider.com/5d66d21e6f24eb396b6c8192?width=1100&format=jpeg&auto=webp',
      'https://www.cheatsheet.com/wp-content/uploads/2020/08/Keanu-Reeves-5.jpg',
      'https://i.insider.com/5d66d21e6f24eb396b6c8192?width=1100&format=jpeg&auto=webp',
      'https://img.jakpost.net/c/2019/05/20/2019_05_20_72607_1558317268._large.jpg',
      'https://www.cheatsheet.com/wp-content/uploads/2020/09/keanu-reeves-3-1200x851.jpg',
      'https://media.comicbook.com/2019/05/fortnite-john-wick-skin-1171077-1280x0.jpeg',
      'https://www.mercurynews.com/wp-content/uploads/2019/05/GettyImages-1151142115.jpg?w=1024&h=802',
      'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/09/02/Pictures/microsoft-entertainment-xbox-event-ahead-electronic-2019_0b89cb3c-cd5f-11e9-a264-bc92e50e5c68.jpg',
      'https://cdn.cnn.com/cnnnext/dam/assets/190613124815-keanu-for-oped-super-169.jpg',
      'https://pyxis.nymag.com/v1/imgs/01c/be1/366405b359be1f0e84d859e863e036613c-GettyImages-2269141.2x.rsquare.w536.jpg',
      'https://pyxis.nymag.com/v1/imgs/f02/b98/1243415d3e9119b6c40434f6531350b243-GettyImages-180275513.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/1e0/858/5cdfed93aa6de195ee95f6eae34484fb5e-GettyImages-1984402.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/1e3/cb2/aa0a3de53c5ad3389d1d348657b5eaa139-GettyImages-450255000.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/8be/eff/e2b3aa7abc2d7d3bd749dfc8b7d36955bf-GettyImages-104079835.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/c85/8e2/8c00a571fdb0c0e42ea3551876e778a8d0-GettyImages-90792118.rhorizontal.w807.jpg',
      'https://pyxis.nymag.com/v1/imgs/d05/887/c4db5289a03e525b6ab867436b4fc872ab-GettyImages-520930984.rhorizontal.w807.jpg',
      'https://pyxis.nymag.com/v1/imgs/a77/9cc/ca3a6f4104e32a13878cddebde51a1ca87-GettyImages-695507252.rhorizontal.w807.jpg',
      'https://pyxis.nymag.com/v1/imgs/939/29f/dd93cdaed56764d4c6fee91a6c6bcc11b4-GettyImages-858055188.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/381/b17/b66627a11c1e72783587e942c69d985a19-GettyImages-83866911.rhorizontal.w807.jpg',
      'https://pyxis.nymag.com/v1/imgs/f98/cf3/9a2d8ab5bd59944c243e6f06bb3016588c-GettyImages-85857947.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/e38/c0a/4196e3f6ec35ce410650d9bfe7f965d765-GettyImages-2030172.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/fde/3e6/c2622dc4876600ad43f0c3c785227040be-GettyImages-542921762.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/d52/755/d01a94ac86597e69203dd13f03426ec9bd-GettyImages-71240438.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/4e8/64c/7e058dc5236e7efa5922c448b9bc10e980-spl210324-002.rdeep-vertical.w450.jpg',
      'https://pyxis.nymag.com/v1/imgs/48e/b49/3bce78d36b45b429f7f615da265927e76f-spl216522-008.rdeep-vertical.w450.jpg',
    ]

    Keanus.sort(() => Math.random() - 0.5)
    let reply = Keanus[0]

    const keanuEmbed = {
      color: Config.color.yellow,
      title: 'Keanu',
      image: {
        url: reply,
      },
    }

    message.channel.send({
      embed: keanuEmbed,
    })
  }
}

module.exports = keanuCommand
