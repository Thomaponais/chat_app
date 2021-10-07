import 'twin.macro'
import styledImport from '@emotion/styled'
import { css as cssImport } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'

declare module 'twin.macro' {
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSInterpolation
  }

  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSInterpolation
  }
}
