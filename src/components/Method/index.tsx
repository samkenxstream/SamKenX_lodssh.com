import React from "react"
import * as SC from "./styles"

interface Param {
  name: string
  type: string
  desc: string
}

interface MethodProps {
  method: {
    name: string
    call: string
    desc: string
    since: string
    params: Param[]
    example: string
  }
}

const Method = ({ method, ...restProps }: MethodProps): JSX.Element => (
  <SC.MethodWrapper {...restProps}>
    <SC.Name>_.{method.call}</SC.Name>

    <SC.Content>
      <SC.MetaLinks>
        <SC.MetaLink to="/">source</SC.MetaLink>
        <SC.MetaLink to="/">npm package</SC.MetaLink>
      </SC.MetaLinks>

      {/* TODO: extract to sensible HTML */}
      {method.desc}

      <SC.Subtitle>Since</SC.Subtitle>
      <SC.SubContent>{method.since}</SC.SubContent>

      <SC.Subtitle>Arguments</SC.Subtitle>
      <SC.SubContent>
        <SC.Arguments>
          <SC.ArgumentCol>
            <SC.ArgumentHeader>argument</SC.ArgumentHeader>
            {method.params.map((param, i) => (
              <SC.ArgumentValue key={i}>
                <SC.InlineCode>{param.name}</SC.InlineCode>
              </SC.ArgumentValue>
            ))}
          </SC.ArgumentCol>

          <SC.ArgumentCol>
            <SC.ArgumentHeader>type</SC.ArgumentHeader>
            {method.params.map((param, i) => (
              <SC.ArgumentValue key={i}>{param.type}</SC.ArgumentValue>
            ))}
          </SC.ArgumentCol>

          <SC.ArgumentCol>
            <SC.ArgumentHeader>description</SC.ArgumentHeader>
            {method.params.map((param, i) => (
              <SC.ArgumentValue key={i}>{param.desc}</SC.ArgumentValue>
            ))}
          </SC.ArgumentCol>
        </SC.Arguments>
      </SC.SubContent>

      {/* TODO: reimplement? */}
      <SC.Subtitle>Returns</SC.Subtitle>
      <SC.SubContent>
        <SC.InlineCode>(array)</SC.InlineCode>
      </SC.SubContent>

      <SC.Subtitle>Example</SC.Subtitle>
      <SC.StyledCode>
        {method.example
          .replace(/```js/, "")
          .replace(/```/, "")
          .trim()}
      </SC.StyledCode>
    </SC.Content>
  </SC.MethodWrapper>
)

export default Method
