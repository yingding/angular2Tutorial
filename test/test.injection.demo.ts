/**
 * Created by yingdingwang on 8/21/16.
 */
export class MainPage {
    public items : string[];
    constructor(private _logger : ILogger, private _itemsService : IItemsService) {
        this.items = _itemsService.getItems();
        _logger.logMessage("items downloaded", this.items);
    }
}

export class ItemsService implements IItemsService {
    public getItems() : string[] {
        return ["alpha", "bravo", "charlie"];
    }
}

export class AltItemsService implements IItemsService {
    public getItems() : string[] {
        return ["delta", "echo", "foxtrot"];
    }
}

export class Logger implements ILogger {
    public logMessage(title: string, message: any) {
        console.log('[' + title + '] ' + message);
    }
}

export interface ILogger {
    logMessage(title: string, message: any);
}

export interface IItemsService {
    getItems() : string[];
}

var page = new MainPage(new Logger(), new AltItemsService());