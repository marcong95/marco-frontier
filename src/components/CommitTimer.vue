<template>
  <article class="commit-timer">
    <p class="description" lang="zh-cmn-Hans">这个家伙已经{{ time.zh }}没碰过这个网站的代码了。</p>
    <p class="description" lang="zh-yue-Hans">呢条友已经{{ time['zh-yue'] }}冇掂过呢个网站嘅代码啦。</p>
    <p class="description" lang="en">It has been {{ time.en }} since this guy wrote any piece of code for this site.</p>
    <p class="description" lang="ja">この{{ time.ja }}間、こいつはこのサイトのコードを一切書きません。</p>
  </article>
</template>

<script>
import moment from 'moment'
import '../scripts/moment-locale'

const query = `
{
  repository(owner: "marcong95", name: "marco-frontier") {
    name
    refs(refPrefix: "refs/", first: 5) {
      nodes {
        name
        target {
          ... on Commit {
            id
            message
            committedDate
          }
        }
      }
    }
  }
}
`

export default {
  data() {
    return {
      time: {
        zh: '1个月',
        'zh-yue': '1个月',
        en: '1 month',
        ja: '1ヶ月'
      }
    }
  },

  mounted() {
    this.$http.post('https://api.github.com/graphql',
      { query: query.trim() },
      {
        headers: {
          'Authorization': 'bearer 144622adf391f2649e2e85c4e638a7090ff23fd8',
          'Content-Type': 'application/json'
        },
      }
    )
    .then(res => {
      const refNodes = res.data.data.repository.refs.nodes
      const dates = refNodes
        .map(node => node.target.committedDate)
        .map(dateStr => moment(dateStr))
      const daysToNow = dates.map(date => moment().diff(date, 'days'))
      const latestIndex = daysToNow.indexOf(Math.min.apply(null, daysToNow))

      const latest = dates[latestIndex]
      for (let lang in this.time) {
        latest.locale(lang)
        this.time[lang] = latest.toNow(true)
      }
    })
    .catch(err => {
      this.rawData = err.toString()
    })
  }
}
</script>
