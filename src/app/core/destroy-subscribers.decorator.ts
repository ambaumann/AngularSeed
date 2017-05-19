import { Subscription } from 'rxjs/Subscription';

// creating the decorator DestroySubscribers
export function DestroySubscribers() {
  return function (target: any) {
    // decorating the function ngOnDestroy
    target.prototype.ngOnDestroy = ngOnDestroyDecorator(target.prototype.ngOnDestroy);

    // decorator function
    function ngOnDestroyDecorator(f) {
      return function () {

        // saving the result of ngOnDestroy performance to the variable superData
        const superData = f ? f.apply(this, arguments) : null;

        // unsubscribing
        for (const subscriberKey of this.subscribers) {
          const subscriber = this.subscribers[subscriberKey];
          if (subscriber instanceof Subscription) {
            subscriber.unsubscribe();
          }
        }

        // returning the result of ngOnDestroy performance
        return superData;
      }
    }

    // returning the decorated class
    return target;
  }
}
