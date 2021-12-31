import User from 'src/app/models/userModel';
// userları statik olarak burada public ve private keyleriyle birlikte tutuyoruz
export const users: User[] = [
  {
    id: 1,
    name: 'The Swag Coder',
    phone: '9876598765',
    image: 'assets/user/user-1.png',
    publickeypem: `-----BEGIN PUBLIC KEY-----
      MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjBummBU12qMjEr3CK110
      zQu9Hq5GvvrmuE+pyXvH5343X5tgpveDZ8Sdp9NT0mmpRimmPXETff8KUT8MTaeB
      Kw7HHEVsTPDYni2RG5GU6gJwMGcVADdywtp1fKEgeo9i2pQ/FTS8N8A53HSLtT5m
      O5xRCUfBt0lBg499B9mpyFdSm/w0nyQ+5RCr5cvMJUevYlognbBKoVnIBIdGQMBF
      lQ6Pv8iYOvEvKHLjGDFa9wpqB5JSEo9q+zBHTfAxDIfGd0edttaGjcW5BP2M/T8I
      ZPLWEdZIy0Qa6bZN8Hf84wMeUmV/RzjoacuRw21q5NTPi/B6if2HL3wziI32vJHY
      XQIDAQAB
      -----END PUBLIC KEY-----
      `,
    privatekeypem: `-----BEGIN RSA PRIVATE KEY-----
      MIIEowIBAAKCAQEAjBummBU12qMjEr3CK110zQu9Hq5GvvrmuE+pyXvH5343X5tg
      pveDZ8Sdp9NT0mmpRimmPXETff8KUT8MTaeBKw7HHEVsTPDYni2RG5GU6gJwMGcV
      ADdywtp1fKEgeo9i2pQ/FTS8N8A53HSLtT5mO5xRCUfBt0lBg499B9mpyFdSm/w0
      nyQ+5RCr5cvMJUevYlognbBKoVnIBIdGQMBFlQ6Pv8iYOvEvKHLjGDFa9wpqB5JS
      Eo9q+zBHTfAxDIfGd0edttaGjcW5BP2M/T8IZPLWEdZIy0Qa6bZN8Hf84wMeUmV/
      RzjoacuRw21q5NTPi/B6if2HL3wziI32vJHYXQIDAQABAoIBAGB2NRemGsLh6Kbh
      kMqMeHsnpth1wm2AjtK8vjfjCfnekz822a9637TU0HqYa7CFYK7WxAavUG1B55eS
      YeUg+zRq4zkarvq2I12cH7isXatTbGxWvEW+5zsybwsUYCkhiTzWLixqd1+m7+9R
      KlLpmDdYYw6RodSQEhQC+WErQdKVDrlWWnfjhwB8VnQmXgMZcZg4JerspOWYlDpM
      dWnPX8rU9A98EJ8PUsmkvsJpuXJ1a/MqU/3bgJkHZS1fvKL3/wHqtOqwhYAadJu5
      Yd5gdOHITKkWJJbkmtnVgsiT71gjnsJKzuUo99J/qhhSknvfEL2INfmeZLCRyEbo
      qisxvuECgYEAzY8B+6zV/+xMsrpbFh2aV73bbEYoIaZl9Q0s0OX7dI6QyXjnRnUb
      OjMLDR2CHKlR/S82WI/3VT5717oDAqSPh7YTm30zaFpqKkXvlqM0Viz87fYeTXSR
      qRRVEu7FheX2Pilm3cSHZRUKKWozLa1v4L0sZJ49jqpqF/L3Ik9fYUUCgYEArn0Z
      bbRJhT1XPoEf30k3YjKKnknAy5i6UTAwGzupV2MdZDYYyjkrcT7TN+ql6q3K8/Qn
      H7Wrxoe6623LY5kd5rNN685ub+z+VfU4hFGY+mLHSK7Dan8L/MXK0xxNaYNfrtEp
      4UPrzdQzFjp75T/2yYF9yVPr3yFpIvBpvD2bcDkCgYEAmp8U3cxPmNeVhed59rPD
      0nZEpDhNnao+DUugx24HbNCEhphEV5JlLa0RhgcJRSf0PV+TIKECagO7QjVwaD+C
      m5HRQ+e0kK1aKHw80XHoP15Nz22Ps7GYk7dwmvIycBrf1DhuYSigs99UqnxxDM3m
      VwXVa8ZABZ2YenVPgmZ0F4UCgYBUv5AVN4ap/1QbmK25Tp9mw3OOU/YfLQv5mPUU
      lRK3zf0diiTaO5A9Da2bMA3sAQNdH83M2fkXkR8ZcBdkRZ8/SQFksbv0AuC5MUSF
      B/jMTCPMyo1BcXmKCSttBAcZY2SazR6ROeMS8qjpd/hrLXkZABrvKSKcGmctQCWq
      9yVDCQKBgB8dmGNGL5sdgT+yic9wpzhinJNPsTorqdakVBwsWzwbs6B3NlS95wWU
      5NbF9m1DqqSwupIq5m7HN1Ua3wKYAnZXcC21jewUn7G1YzM9POXwY/UTBFuzK6WV
      vLvN9O/+q6XhlOYotOSogUEuKC43yxHP5vs6K2DO/F8nNSpqjIQ8
      -----END RSA PRIVATE KEY-----
      `,
  },
  {
    id: 2,
    name: 'Wade Warren',
    phone: '9876543210',
    image: 'assets/user/user-2.png',
    publickeypem: `-----BEGIN PUBLIC KEY-----
      MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwJ8n94tQiCEzfTRocpbm
      448OkukXlcPxT3nBqLLfPESeYl7b2PHRy5IvfWNmWdE7d5bfPT2AGcqzmRwi8dSS
      aRSqtTMHwrR7oGrI+6AcfNLmqTSo0fsUKN9zwaz3sRD/BIVRERnsYSK4H4sFTYmU
      TJhjA17RT1xmQvLeydZZuAN6JEPv5hfEoJg4ObZ8DOK5Dmn9HL1pi+zSdJqZkHp7
      HABl/WafGV7gWyGp8UmW7yWtPRf4M1C4JJ5IcwNDQ1CfEGb9l1BP5qtOpc1ZBWKH
      blTAqxgGWlRtbB0ZgrviPYWOOYd71TTbGIoDAZ+TraIfkMCTrm5MYDh3wMqIYBHw
      PQIDAQAB
      -----END PUBLIC KEY-----
      `,
    privatekeypem: `-----BEGIN RSA PRIVATE KEY-----
      MIIEpAIBAAKCAQEAwJ8n94tQiCEzfTRocpbm448OkukXlcPxT3nBqLLfPESeYl7b
      2PHRy5IvfWNmWdE7d5bfPT2AGcqzmRwi8dSSaRSqtTMHwrR7oGrI+6AcfNLmqTSo
      0fsUKN9zwaz3sRD/BIVRERnsYSK4H4sFTYmUTJhjA17RT1xmQvLeydZZuAN6JEPv
      5hfEoJg4ObZ8DOK5Dmn9HL1pi+zSdJqZkHp7HABl/WafGV7gWyGp8UmW7yWtPRf4
      M1C4JJ5IcwNDQ1CfEGb9l1BP5qtOpc1ZBWKHblTAqxgGWlRtbB0ZgrviPYWOOYd7
      1TTbGIoDAZ+TraIfkMCTrm5MYDh3wMqIYBHwPQIDAQABAoIBAQCk7SFZcS2pAVSG
      1cLAqrhTC4BdBbut/jG17PiGK3G8trwuWi4/WP5bIXYMFHnkWaRjRwkp9GikrMyO
      QmshSPN7ibiIoYL5kXNw7T3dRUBfGG1rX61U7Xhbbsg8go8qSvUvt76rt9iPaxzf
      1TbbJvuVgbz1e9AX9XORy0Y654+2X7ciZXBr2Yk4+yfwjPXDnn2QRlnQ4hkjL4Zd
      5D+WfctnuKfFvUf6wbQSwkSsfLOYlYPnMMfph2nLqmmG52lsnzXkYGdFuGHi2qKj
      hUBz0OaXV14HdZWlzj0byGaYeEzopJU0raKR5K0Uh20R+DbayBE3rpwf+nv2PpUX
      cXW/Lzf5AoGBAOhRIbTiV27cCZQY0G5cnmcDZcuGu2WAUDFS2KC+djn06VzuaXKs
      DQIpg1p0fT0wJApezNj/Bu9aWfJwsNSf5aNc8L5UD0edYHB62xBB3fKHi33PQo5G
      AE9EDBTeyBf4hQCq0vUEUfE1nq79mg65dgqtVXlu4AEzwtJ78RWtmDvLAoGBANRC
      FRZ7+Rn3A0N1REv334KP/ntCSKo/V+9LCtKWFP9/HuvLkJiKXSRLJ9yU+v5Xod/o
      FKdtqi96nsCOcs27Qbrf+AOnOKPLgLG9rKzaLStOGcIqg6oxWCWFC49hW/SsxmLn
      oGk4DIi+aSK4T8AxdwTzCjjGgqRn5ISMlP4DTZMXAoGAPGEBuqptAPINR0Ffwp8t
      yCY46bm9sLa1oOwgQz7dKVj+4dlQ7K3Mv7gcXIEUH7gIVe2nnepCWikIYZtqSgi4
      vUmlhEICqqE7dGBp2QLVdXhHB867RJDq+a782NvB84DyyGadZ3LU/TTrZh2hUZxg
      EoxUP7hSXd2fD+eIlBLHExsCgYB3y4QTWIzStrLE095j8dXX3mUGM/bG/1El4PiO
      ud3IBXryIcXOEelXnoM033B5NARMVrOxexdeDJqkmsD4lAMY8WcMyMgSybwslJxs
      QgbUNhQbndsJpyfUpS5NEenQQeMF1yyVteh9FNpJmjSIiGJgDLtsJ718BJbYqG8+
      naaeqQKBgQDdVVYjvQ7zSC/ycHClq2+sp4yapAFP6hlsax0grjrXb8Lf90V1T+4k
      q1W3Ugoy+C9J6NJTK7+lZgP24/78MAoENY54LCeB3uTCknyZXqYgCQ3hLeAUs93M
      LANLxFFQ1itK47YFf0QNzLjEWq0qAVECXUHKQncRQMIeuAyWT0qm6w==
      -----END RSA PRIVATE KEY-----
      `,
  },
  {
    id: 3,
    name: 'Albert Flores',
    phone: '9988776655',
    image: 'assets/user/user-3.png',
    publickeypem: `-----BEGIN PUBLIC KEY-----
      MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg6dTI1fsXYzRKXF+msc3
      VziNBOqqAx2r5IsaGjYu24TlECIggzW+4Nz+yrh8oKm7WkWaVfXHSN1QdNR88qT6
      dsyN5byIOVR3jGrE3jM3bLeKkugEo8i04GoaXUCDGsnIaG6lubBaBrVK6elZQy2p
      M6HXXqGMahwP1NKd3tJq7Ry31w/K8tkN9H1TvmWn98VupcWTbIsoV3bO7fmIfM9n
      xgpumUNfRf/X5M6BCPqri7odRCwfyJXUahbryKa4tmXkPEO/zBu/0CebmGm+fnqS
      BQllLygR21NJwIyV5tHKlnF1ztarpV6112YSj/uyFO5mZ0+Vgae+eLRVrG8gX/xk
      jQIDAQAB
      -----END PUBLIC KEY-----
      `,
    privatekeypem: `-----BEGIN RSA PRIVATE KEY-----
      MIIEpQIBAAKCAQEAg6dTI1fsXYzRKXF+msc3VziNBOqqAx2r5IsaGjYu24TlECIg
      gzW+4Nz+yrh8oKm7WkWaVfXHSN1QdNR88qT6dsyN5byIOVR3jGrE3jM3bLeKkugE
      o8i04GoaXUCDGsnIaG6lubBaBrVK6elZQy2pM6HXXqGMahwP1NKd3tJq7Ry31w/K
      8tkN9H1TvmWn98VupcWTbIsoV3bO7fmIfM9nxgpumUNfRf/X5M6BCPqri7odRCwf
      yJXUahbryKa4tmXkPEO/zBu/0CebmGm+fnqSBQllLygR21NJwIyV5tHKlnF1ztar
      pV6112YSj/uyFO5mZ0+Vgae+eLRVrG8gX/xkjQIDAQABAoIBADwhd3KEHPwZbgr8
      wHOXG+qldJtTRvWHXtRSyEhCiSJQT4MP40Oqj5UKuwECREHpZB31/mjWif/4vV+v
      EaaNvav2/7R3aMyujK/AsExAnkb0icFRYZUg/aQmMgZ3ian5kaRJLT5jkqrPsPin
      UNLDDy369HBPXt+0E3MEA4EbICVNtCzxERWGR+lvTEGeBJ4Rn4AQK09n/9HUTkWg
      DsZR2uxDHOyLaUWQRbFuL5Iwo3x2g0I4HCnBNHzfGoh9usNagHRbLwADLo8t3AfI
      UB104aIrdtPzscIEcIQcelQE6a+ZCpJ33k58EOTk6YQyCNj8zDRiRtVOjnLhnNsB
      HdXHRYECgYEA7iReEnnT6WZDl6Nl8ybHnJpee1slCZJlh6Jcug/CLlydimS04Cr8
      3oMTpSoZ08YP8H+iATtF6jSTwGJM1zKo+0IHtMB8XUT6Qqqf3HNPpGVr0ZWgjr2o
      tvOrry2+iTAjWzjc8xMDqasAblVVTYNljuyz5fDE/Yg8nWLM41aM3qECgYEAjYaw
      m8qXD4k/CAjh6FpDuSR9ZUQPlbFewz8SY+2HjDLIlsqmIxKveXuPLnvhz+LLWiY0
      hfgcn7VH2t1xBYln6ula6hUoMX4LqoWrGFhRuKY3mOyg/grf+pRSQpAzeZoTR1yt
      z77rULi1vXdm2Q+eF8ZLBqRQRQlWbXCkQhedWm0CgYEAouf98mWksWVjl7gPZeaB
      Zn+zYm9XRtT+32oSRLXDADQbETETCsZddVn1dmb2hAhZnwuwp2cEzNJqwJB+QDhH
      oJnq65tBeAxXpoNSGFxJfwxiVV0mGH9lisHmEFAap35msWCUxTOcrdRs1w1I7V2V
      e9AwwHuURluMG54ayunKNAECgYEAjUM+rxJFO92rS5LKIslORdO1UkngIHN9efdP
      nOyvWnIqI9E8iU+SVPjOzwAaQg1HGsF9tacUsxkYEs7rjDI9xo2MEJBzoQsGC/wF
      7nPhhiRq5Dp0633hWNWJUiVrK9ptmdJZLz6K1PS5etdekhRzoZlss8F42Z/bY7uG
      SO4XQvUCgYEAwVWfu9oxwMenIWo9De8/ox/WCzU/zJ3fehfxcBdF8QX8MW2Fub1n
      CAi4OBTtSKhRDIcuGWqwv+zvys1+CF8nWWyo903xTAGxh9+L/aEtJ5phcRQ5C91g
      VN3lvE/Sd+SEh5qYFrBgFJlbfHCqpb7jhWUlW7feYwb0NhVDY3tD2eA=
      -----END RSA PRIVATE KEY-----
      `,
  },
  {
    id: 4,
    name: 'Dianne Russell',
    phone: '9876556789',
    image: 'assets/user/user-4.png',
    publickeypem: `-----BEGIN PUBLIC KEY-----
      MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmr5LVCuSoTABbWGpUpHo
      3j4UUjbyn0YDHaXFK+sOxNGij8OOOBy2EBU+XfZ+PvCgJmnVxPwibPNQPvm6kYM0
      vjyGNLNiOZRJkeE1wkKNVwq/rqe+3wGYtMk00W3weNsT+r/gmWKiVjWneMwnT7wk
      A2Q7ALb+mYPH7jyYxbO83ojoMQMMMpahldnRau1nfHBybu5gKtHRELlDLIW/0TXR
      ocujvT2S+D5uidl3ooo611xm+y7u5+2nkCuGlAPEbheC5j3UoBazS2jG1ltN6gEV
      DHggAQHM8JYVV/C7mV7l+8D2iZj+5Yb8SEBYI012heimhkx455hrWB8bmdxQM21q
      pQIDAQAB
      -----END PUBLIC KEY-----
      `,
    privatekeypem: `-----BEGIN RSA PRIVATE KEY-----
      MIIEowIBAAKCAQEAmr5LVCuSoTABbWGpUpHo3j4UUjbyn0YDHaXFK+sOxNGij8OO
      OBy2EBU+XfZ+PvCgJmnVxPwibPNQPvm6kYM0vjyGNLNiOZRJkeE1wkKNVwq/rqe+
      3wGYtMk00W3weNsT+r/gmWKiVjWneMwnT7wkA2Q7ALb+mYPH7jyYxbO83ojoMQMM
      MpahldnRau1nfHBybu5gKtHRELlDLIW/0TXRocujvT2S+D5uidl3ooo611xm+y7u
      5+2nkCuGlAPEbheC5j3UoBazS2jG1ltN6gEVDHggAQHM8JYVV/C7mV7l+8D2iZj+
      5Yb8SEBYI012heimhkx455hrWB8bmdxQM21qpQIDAQABAoIBABVB7QE8FyGTga6w
      Ct2v86iMKKh+qefda1IoUqTM3rOFBOrw91mYAB7HfFDWKtOkpKuCQH6WEHidGDn+
      fnW864Lyt5EHz4ePamfi40qzb800Sc7JdnwWMQ8s0NewXaeMmPsKXuVTWm+zYTVD
      /maCtwPMQhrACMu4AcAljOsj3N9JApCmteu7FMX7Nh31+5oTIB0ekF+eC3cyDrah
      QAPxwaANXd8AX9QvKOEMZBZPnB1KcSBEzUfcxuy35oNPFwn5F/OMZfxRVzeijvLU
      KACDl0a16mn3JgGirAIebvMg0dizl5ORRKCEHp0iQ367Ub9ICcRtHD7Dqh3lOA+H
      gIQYyaUCgYEA2RgMBSQP7KgbsTv9usW+IS2/8JEjqxGnCFzWOOzpjWGaUfVPqyO5
      GI+dSOS4gdYuhe5KqwpYpGWyIDUCPtRPMheQubxvbNS5HnC3THZRUJrNej5hdnzB
      A5P13xC/VxRXlrUF66s5pSmrIB2OUOLnLjTP4wKq73OOesEffdngNFcCgYEAtnmx
      X8Ljni3OnX3Ilsnl3VjDXUEtwx8EabWcoLSInirlJPT95A+Uoc7AFqpg2imgWK86
      m0F48/75Q+4v8j+5pTZlof3rBUNPgKmRnPGUazwlgu5JU9e0fjjy5dDiEX2tjbEB
      vQwozDUbW2ySofc8eJ4t4wq4ZjWfnWJ9LtTsG2MCgYEApaMOUMHSEJu2/UQrdFy5
      kzEH2HG0yCogymWi4S4JiGCm0M+daJNJ/25b8Cjqic20E2XbvKKZPV2GScKIIw30
      GuEWAFDAp0WqtIoFoKZJpnlmO1XrIO9QiP1UREzP4I3Zwlf923D5+4VOVqOWWSq2
      fm+3CZqYdzgwxoIhF/GreeMCgYAA4fPOr8WkFTqjnmEjAZUADhbb053iDLtbu4on
      aNgkU7bKB/lWahDg+3wIYAiZ5YumAir5Z0arf3c7MeK/fDlsqCezseO6Ico3qBpR
      NQXvwtm3mWl3Y1q3JZVfMTR2uzHkto94l5925WbdeVf4OpbrSnCUYY/kxquf+kL6
      wALoWwKBgA9StOhCMtisqVPESxYk4sBC1/LaaRsmp91E17bQ7JEG0zCr0DqGCX4k
      u2cXpU43/zWpLvxNa7jedZQMtMKhzKfeuGB6tRCvaoZwO+qSDpvHB0G7vEzRXjUR
      QstbHbndd9wA7fmrqee93pAGUzsySF2YGiIy5UTbK+CP3G1s1XU0
      -----END RSA PRIVATE KEY-----
      `,
  },
];
