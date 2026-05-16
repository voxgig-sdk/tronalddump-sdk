# Tronalddump SDK utility: make_context

from core.context import TronalddumpContext


def make_context_util(ctxmap, basectx):
    return TronalddumpContext(ctxmap, basectx)
