import { Swap as SwapEvent } from "../generated/T24LP/UniswapV2Pair"
import { Swap } from "../generated/schema"
import { BigDecimal } from "@graphprotocol/graph-ts"

export function handleSwap(event: SwapEvent): void {
  let swap = new Swap(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  swap.sender = event.params.sender
  swap.amount0In = event.params.amount0In.toBigDecimal()
  swap.amount1In = event.params.amount1In.toBigDecimal()
  swap.amount0Out = event.params.amount0Out.toBigDecimal()
  swap.amount1Out = event.params.amount1Out.toBigDecimal()
  swap.to = event.params.to
  swap.timestamp = event.block.timestamp
  swap.transaction = event.transaction.hash
  swap.save()
}
