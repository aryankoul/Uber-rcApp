import { IHttp, IModify, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { ISlashCommand, SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import { UberModal } from '../UI/UberModal';

enum Command {
    Call = 'call',
    Status = 'status',
}

export class UberCommand implements ISlashCommand {

    public command = 'uber';
    public i18nParamsExample = 'params_example';
    public i18nDescription = 'cmd_description';
    public providesPreview = false;

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
        const triggerId = context.getTriggerId();
        const [command] = context.getArguments();

        if (triggerId) {
            switch (command) {
                case Command.Call:
                    const modal = await UberModal({ persistence: persis, modify });
                    await modify.getUiController().openModalView(modal, { triggerId }, context.getSender());
                    break;
            }

        }
    }
}
