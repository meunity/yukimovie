export function concatStringFromArray(arr) {
  if (!arr) return
  let ret = ''
  arr.forEach((item) => {
    ret += (item + '/')
  })

  return ret.slice(0, ret.length - 1)
}

export function getImage(url) {
  const transUrl = 'https://images.weserv.nl/?url='
  const _url = url.slice(7)
  return transUrl + _url
}

export function scoreFilter(value) {
  let _value = value.toString()
  if (_value.length === 1) {
    _value += '.0'
  }
  return _value
}

export function setToastTime(toast, time) {
  toast.setDefaultOptions({
    duration: time
  })
}

export function jumpTo(router, path) {
  router.push({
    path: path
  })
}

export function jumpToByFlag(router, pathA, pathB, flag) {
  if (flag) {
    router.push({
      path: pathA
    })
    return
  }
  router.push({
    path: pathB
  })
}

export function sliceSummary(txt) {
  if (txt.length > 70) {
    return txt.slice(0, 70) + '...'
  } else {
    return txt
  }
}

export function getCreateDate(timeStamp) {
  timeStamp = new Date(timeStamp)
  return timeStamp.getMonth() + 1 + '-' + timeStamp.getDate()
}