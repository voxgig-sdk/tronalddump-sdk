package core

type TronalddumpError struct {
	IsTronalddumpError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTronalddumpError(code string, msg string, ctx *Context) *TronalddumpError {
	return &TronalddumpError{
		IsTronalddumpError: true,
		Sdk:              "Tronalddump",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TronalddumpError) Error() string {
	return e.Msg
}
