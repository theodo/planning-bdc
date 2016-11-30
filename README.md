# BDC planning

https://theodo.github.io/planning-bdc

[Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)) instruction is to perform a one week sprint planning in maximum two hours. This can be challenging: I've often seen plannings overlaping this timebox.

BDC Planning is measuring in real time if you're on time during your planning. To do so, it watchs a configurable Trello column and sums the estimated card points (it requires using [Scrum For Trello](https://chrome.google.com/webstore/detail/scrum-for-trello/jdbcdblgjdpmfninkoogcfpnkjmndgje) extension). The progression is displayed on a [burn down chart](https://en.wikipedia.org/wiki/Burn_down_chart).

If you're late you can react to catch up the delay. For example you can ask your teamates
to stand up until the delay is catched or you can split the team in
several groups so that you plan in parallel. Anyway the idea is to be able
to track the team is late so that it can adapt the way of planning.

### For developers

Pull requests are welcome!

To install

```shell
git clone git@github.com:theodo/planning-bdc.git && cd planning-bdc
npm install
npm run watch
```
