import React from 'react';
import ContractCardLoader from '@/components/contract-card-loading';
import { getTotalProfit, TContractInfo } from '@/components/shared/utils/contract';
import DesktopWrapper from '../desktop-wrapper';
import { TGetCardLables, TGetContractPath } from '../types';
import ContractCardBody from './contract-card-items/contract-card-body';
import ContractCardFooter from './contract-card-items/contract-card-footer';
import ContractCardHeader from './contract-card-items/contract-card-header';
import ContractCardSell from './contract-card-items/contract-card-sell';
import ContractTypeCell from './contract-card-items/contract-type-cell';
import MultiplierCloseActions from './contract-card-items/multiplier-close-actions';
import ResultOverlay from './result-overlay';

type TContractCardProps = {
    contract_info: TContractInfo;
    getCardLabels: TGetCardLables;
    getContractPath?: TGetContractPath;
    is_multiplier: boolean;
    is_positions?: boolean;
    onClickRemove?: (contract_id?: number) => void;
    profit_loss: number;
    result?: string;
    should_show_result_overlay: boolean;
};

const ContractCard = ({
    children,
    contract_info,
    getCardLabels,
    getContractPath,
    is_multiplier,
    is_positions,
    onClickRemove,
    profit_loss,
    result,
    should_show_result_overlay,
}: React.PropsWithChildren<TContractCardProps>) => {
    const fallback_result = profit_loss >= 0 ? 'won' : 'lost';
    const payout_info = is_multiplier ? getTotalProfit(contract_info) : profit_loss;
    return (
        <React.Fragment>
            {should_show_result_overlay && (
                <DesktopWrapper>
                    <ResultOverlay
                        contract_id={contract_info.contract_id}
                        currency={contract_info.currency}
                        getCardLabels={getCardLabels}
                        getContractPath={getContractPath}
                        is_multiplier={is_multiplier}
                        is_visible={!!contract_info.is_sold}
                        onClickRemove={onClickRemove}
                        payout_info={payout_info}
                        result={result || fallback_result}
                        is_positions={is_positions}
                    />
                </DesktopWrapper>
            )}
            {children}
        </React.Fragment>
    );
};

ContractCard.Header = ContractCardHeader;
ContractCard.Body = ContractCardBody;
ContractCard.Footer = ContractCardFooter;
ContractCard.Loader = ContractCardLoader;
ContractCard.ContractTypeCell = ContractTypeCell;
ContractCard.MultiplierCloseActions = MultiplierCloseActions;
ContractCard.Sell = ContractCardSell;

export default ContractCard;
