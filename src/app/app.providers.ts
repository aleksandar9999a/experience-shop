import { SignFormService } from './services/signForm.service';
import { UserService } from './services/user.service';
import { CreateFormAnimations } from './services/createFormAnimations.service';
import { AdvertisementsService } from './services/advertisements.service';
import { CatalogService } from './services/catalog.service';
import { DetailsFormAnimations } from './services/item-details.service';
import { ShoppingCardService } from './services/shopping-card.service';

export const providers = [
    SignFormService,
    UserService,
    CreateFormAnimations,
    AdvertisementsService,
    CatalogService,
    DetailsFormAnimations,
    ShoppingCardService
  ]