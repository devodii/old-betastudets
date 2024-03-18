'use client'

import { Button, Skeleton, Wrapper } from '@betastudents/ui'
import { Crown } from '@phosphor-icons/react'
import Link from 'next/link'
import * as React from 'react'
import { lemonSqueezy } from '../lib/lemon-squezzy/utils'

export const Subscription = () => {
  const [url, setUrl] = React.useState('')

  React.useEffect(() => {
    const generateCheckoutUrl = async () => {
      const products = await lemonSqueezy.getProducts()
      setUrl(products.data[1].attributes.buy_now_url)
      console.log({ products })
    }
    generateCheckoutUrl()
  }, [])

  return (
    <Wrapper className="w-full flex-col">
      <h2 className="text-3xl md:text-4xl font-semibold">Subscriptions</h2>

      <div className="border rounded-md px-12 py-6 mt-12">
        <div className="flex justify-evenly items-center w-full">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-center text-xl md:text-2xl font-medium">Pro</p>
            <Crown className="text-black" size={30} />
          </div>

          <span className="text-semibold text-2xl">$10/mo</span>
        </div>

        <ul className="grid grid-rows-1 gap-4 mt-6 mb-3">
          <li className="text-xl">create unlimited course outlines</li>
        </ul>

        {!url ? (
          <Skeleton className="h-12 w-full bg-gray-400" />
        ) : (
          <Link href={url} target="_blank">
            <Button className="h-12 w-full bg-black text-white md:text-xl">
              Subscribe
            </Button>
          </Link>
        )}
      </div>
    </Wrapper>
  )
}
