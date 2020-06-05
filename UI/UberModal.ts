import { IModify, IPersistence } from '@rocket.chat/apps-engine/definition/accessors';
import { IUIKitModalViewParam } from '@rocket.chat/apps-engine/definition/uikit/UIKitInteractionResponder';

export async function UberModal({ persistence,  modify }: {
    persistence: IPersistence,
    modify: IModify,
}): Promise<IUIKitModalViewParam> {

    const block = modify.getCreator().getBlockBuilder();
    block.addInputBlock({
        blockId: 'uber',
        element: block.newPlainTextInputElement({ initialValue: '', actionId: 'location' }),
        label: block.newPlainTextObject('Location'),
    })
    .addDividerBlock();

    block.addInputBlock({
        blockId: 'type',
        element:  block.newStaticSelectElement({
                    placeholder: block.newPlainTextObject('Type'),
                    actionId: 'visibility',
                    initialValue: 'uberx',
                    options: [
                        {
                            text: block.newPlainTextObject('UberX'),
                            value: 'uberx',
                        },
                        {
                            text: block.newPlainTextObject('VIP'),
                            value: 'vip',
                        },
                    ],
                }),
       label: block.newPlainTextObject('Type'),
    });

    return {
        id: '11',
        title: block.newPlainTextObject('Call a ride'),
        submit: block.newButtonElement({
            text: block.newPlainTextObject('Search'),
        }),
        close: block.newButtonElement({
            text: block.newPlainTextObject('Cancel'),
        }),
        blocks: block.getBlocks(),
    };
}
