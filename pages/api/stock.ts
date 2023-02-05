import axios from 'axios'
import { load } from 'cheerio'
import { NextApiRequest, NextApiResponse } from 'next'

const URL = 'https://www.dsebd.org/'

type StockData = {
  name: string
  prices: {
    current: string
    changed: string
    changePercent: string
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const stockData: StockData[] = []
    const response = await axios.get(URL)
    const html = response.data

    const $ = load(html)

    $('.abhead', html).each(function () {
      $(this).text()

      const companyName = $(this)
        .text()
        .replace(/\t/g, '')
        .split(' ')[0]
        .trim()
        .match(/\d?[a-zA-Z]|\([^)]*\)/g)!
        .join('')

      const priceData = $(this)
        .text()
        .match(/[+/-]?[0-9]+\.[0-9]+/g)!

      stockData.push({
        name: companyName,
        prices: {
          current: priceData[0],
          changed: priceData[1],
          changePercent: `${priceData[2]}%`,
        },
      })
    })

    res.status(200).json({
      success: true,
      data: stockData,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Failed to scrape stock data',
    })
  }
}
