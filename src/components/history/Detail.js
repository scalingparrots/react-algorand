import React from "react";

import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import Algorand from "../utils/Algorand";
import Timer from "../utils/Timer";

const Detail = ({ tx }) => (
  <Row className="algorand-history-header algorand-history-row">
    <Col md="auto">
      {tx.status !== Algorand.status.PENDING ? (
        <div>
          <span>#&nbsp;</span>
          <a
            target="_blank"
            href={tx.url.replace("{txId}", tx.txId)}
            title={tx.url.replace("{txId}", tx.txId)}
            rel="noopener noreferrer"
          >
            {tx.txId.substr(0, 11)}...
          </a>
        </div>
      ) : (
        <span>{`# ${tx.txId.substr(0, 11)}...`}</span>
      )}
    </Col>
    <Col md="3" className="ml-auto pl-0">
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip>
            <Timer date={tx.date} />
          </Tooltip>
        }
      >
        <span>
          {tx.status === Algorand.status.PENDING ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : tx.status === Algorand.status.SUCCESS ? (
            <i className="fas fa-check"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </span>
      </OverlayTrigger>
    </Col>
  </Row>
);

export default Detail;
