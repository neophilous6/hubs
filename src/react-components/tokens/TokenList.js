import React from "react";
import PropTypes from "prop-types";
import { Token } from "./Token";
import { Row } from "../layout/Row";
import { Column } from "../layout/Column";
import { Center } from "../layout/Center";
import { FormattedMessage } from "react-intl";
import { Button } from "../input/Button";
import styleUtils from "../styles/style-utils.scss";
import styles from "./Tokens.scss";

export const TokenList = ({ tokens, onRevokeToken }) => {
  return (
    <div>
      <Row spaceBetween breakpointColumn="sm" topMargin="lg">
        <h2>
          <FormattedMessage id="empty-token.title2" defaultMessage="Token List" />
        </h2>
        <Button preset="primary" sm>
          <FormattedMessage id="tokens.button-create-token" defaultMessage="Create token" />
        </Button>
      </Row>
      {tokens && tokens.length ? (
        <Column className={styleUtils.xlMarginY}>
          {tokens.map(token => <Token key={token.id} tokenInfo={token} onRevokeToken={onRevokeToken} />)}
        </Column>
      ) : (
        <div className={styleUtils.xlMarginY}>
          <Row padding="md" className={styles.backgroundWhite}>
            <Center>
              <FormattedMessage id="tokens.no-tokens-created" defaultMessage="No tokens created." />
            </Center>
          </Row>
        </div>
      )}
    </div>
  );
};

TokenList.propTypes = {
  tokens: PropTypes.array,
  onRevokeToken: PropTypes.func
};
