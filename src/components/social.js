import React from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

export const Social = ({ shareUrl, announcement }) => (
  <div className="flex items-start">

    <TwitterShareButton
      url={shareUrl}
      title={announcement}
      className="">
      <TwitterIcon
        size={32}
        round />
    </TwitterShareButton>

    <div className="pl2">
      <FacebookShareButton
        url={shareUrl}
        quote={announcement}
        className="">
        <FacebookIcon
          size={32}
          round />
      </FacebookShareButton>
    </div>

    <div className="pl2">
      <WhatsappShareButton
        url={shareUrl}
        title={announcement}>
        <WhatsappIcon
          size={32}
          round />
      </WhatsappShareButton>
    </div>

  </div>
)
